(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

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

/***/ "./dev/js/components/insurance/insuranceBankDetailsView.js":
/*!*****************************************************************!*\
  !*** ./dev/js/components/insurance/insuranceBankDetailsView.js ***!
  \*****************************************************************/
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

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "./node_modules/node-snackbar/src/js/snackbar.js");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compress = __webpack_require__(/*! compress.js */ "./node_modules/compress.js/index.js");

var InsuranceCancellationView = function (_React$Component) {
				_inherits(InsuranceCancellationView, _React$Component);

				function InsuranceCancellationView(props) {
								_classCallCheck(this, InsuranceCancellationView);

								var _this = _possibleConstructorReturn(this, (InsuranceCancellationView.__proto__ || Object.getPrototypeOf(InsuranceCancellationView)).call(this, props));

								_this.state = {
												showCancelPopup: false,
												showCancelSection: true,
												name: '',
												bankName: '',
												address: '',
												accountNumber: '',
												ifscCode: '',
												err: '',
												img_url: null,
												img_id: null,
												isLoading: false,
												policy_number: null
								};
								return _this;
				}

				_createClass(InsuranceCancellationView, [{
								key: 'componentDidMount',
								value: function componentDidMount() {
												this.setState(_extends({}, this.props.insurer_bank_details));
								}
				}, {
								key: 'getGetOrdinal',
								value: function getGetOrdinal(n) {
												var s = ["th", "st", "nd", "rd"],
												    v = n % 100;
												return n + (s[(v - 20) % 10] || s[v] || s[0]);
								}
				}, {
								key: 'cancelPolicy',
								value: function cancelPolicy() {
												this.setState({ showCancelPopup: true });
								}
				}, {
								key: 'clickPopUp',
								value: function clickPopUp(type) {
												if (type == 1) {
																this.props.history.push('/insurance/canceldetails');
												} else {
																this.setState({ showCancelPopup: false });
												}
								}
				}, {
								key: 'inputHandler',
								value: function inputHandler(e) {
												this.setState(_defineProperty({}, e.target.name, e.target.value));
								}
				}, {
								key: 'submitForm',
								value: function submitForm() {
												var _this2 = this;

												this.setState({ err: "" });
												// validate
												var register = true;
												Object.keys(this.refs).forEach(function (prp, i) {
																var validated = false;
																switch (_this2.refs[prp].name) {
																				case "name":
																								{
																												if (!_this2.refs[prp].value) {
																																validated = false;
																												} else {
																																validated = !/[^a-zA-Z ]/.test(_this2.refs[prp].value);
																												}
																												break;
																								}
																				case "accountNumber":
																								{
																												if (!_this2.refs[prp].value) {
																																validated = _this2.refs[prp].value.match(/^[56789]{1}[0-9]{9}$/);
																												} else {
																																validated = true;
																												}
																												break;
																								}
																				case "ifscCode":
																								{
																												if (!_this2.refs[prp].value) {
																																validated = _this2.refs[prp].value.match(/^[56789]{1}[0-9]{9}$/);
																												} else {
																																validated = true;
																												}
																												break;
																								}
																				case "bankName":
																								{
																												if (!_this2.refs[prp].value) {
																																validated = false;
																												} else {
																																validated = !/[^a-zA-Z ]/.test(_this2.refs[prp].value);
																												}
																												break;
																								}
																				case "address":
																								{
																												if (!_this2.refs[prp].value) {
																																validated = false;
																												} else {
																																validated = !/[^a-zA-Z ]/.test(_this2.refs[prp].value);
																												}
																												break;
																								}
																				default:
																								{
																												validated = true;
																												break;
																								}
																}
																if (validated) {
																				_this2.refs[prp].style.border = '';
																} else {
																				_this2.refs[prp].style.border = '1px solid red';
																				register = false;
																}
												});

												if (register) {
																if (!this.state.img_url) {
																				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please upload required documents." });
																} else {
																				var data = {};
																				data.bank_name = this.state.bankName;
																				data.account_number = this.state.accountNumber;
																				data.account_holder_name = this.state.name;
																				data.ifsc_code = this.state.ifscCode;
																				data.bank_address = this.state.address;
																				data.image_ids = [{ 'document_image': this.state.img_id }];
																				data.cancel_reason = this.props.cancel_reason;
																				this.props.cancelInsurance(data, function (resp) {
																								// to submit user cancellation request
																								if (resp.success) {
																												_this2.props.clearBankDetails(); // to reset user enterted bank details
																												_this2.setState({ policy_number: resp.policy_number, showCancelSection: false });
																								}
																				});
																}
												}
								}
				}, {
								key: 'handleEnterPress',
								value: function handleEnterPress(e) {
												if (e.key === 'Enter') {
																this.submitForm();
												}
								}
				}, {
								key: 'pickFile',
								value: function pickFile(e) {
												var _this3 = this;

												if (e.target.files && e.target.files[0]) {
																var file = e.target.files[0];
																if (e.target.files[0] && e.target.files[0].name.includes('.pdf')) {
																				this.finishCrop(null, file);
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
																								_this3.getBase64(file, function (dataUrl) {
																												_this3.finishCrop(dataUrl, null);
																												_this3.setState({ dataUrl: dataUrl });
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
												var _this4 = this;

												var file_blob_data = void 0;
												if (dataUrl) {
																file_blob_data = this.dataURItoBlob(dataUrl);
												}
												var mem_data = {};
												var existingData = void 0;
												var img_tag = "document_image";
												this.setState({
																dataUrl: null, isLoading: true
												}, function () {
																var form_data = new FormData();
																if (file) {
																				form_data.append(img_tag, file, "imageFilename.pdf");
																} else {
																				form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
																}
																_this4.props.uploadBankProof(form_data, 'image', function (data, err) {
																				// to upload proofs
																				if (data) {
																								_this4.setState({ img_url: data.data.document_image, img_id: data.id, isLoading: false }, function () {
																												_this4.props.saveUserBankDetails(_this4.state); // to save user entered bank details in store
																								});
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
												var _this5 = this;

												this.setState({ img_url: null, img_id: null }, function () {
																_this5.props.saveUserBankDetails(_this5.state); // to save user entered bank details in store
												});
								}
				}, {
								key: 'handleSubmit',
								value: function handleSubmit() {
												this.props.saveUserBankDetails(this.state); // to save user entered bank details in store
								}
				}, {
								key: 'render',
								value: function render() {
												return _react2.default.createElement(
																'div',
																{ className: 'profile-body-wrap', style: { paddingBottom: 80 } },
																_react2.default.createElement(_DesktopProfileHeader2.default, { showPackageStrip: true }),
																this.state.showCancelSection ? _react2.default.createElement(
																				'section',
																				{ className: 'container parent-section book-appointment-section container-top-margin' },
																				_react2.default.createElement(
																								'div',
																								{ className: 'row main-row parent-section-row' },
																								_react2.default.createElement(
																												'div',
																												{ className: 'col-12 col-md-7 col-lg-7' },
																												_react2.default.createElement(
																																'section',
																																{ className: 'profile-book-screen' },
																																_react2.default.createElement(
																																				'div',
																																				{ className: 'widget' },
																																				_react2.default.createElement(
																																								'div',
																																								{ className: 'widget-content' },
																																								_react2.default.createElement(
																																												'h1',
																																												{ className: 'ins-cancl-heading' },
																																												'We need bank account details to proceed with your cancellation'
																																								),
																																								_react2.default.createElement(
																																												'div',
																																												{ className: 'ins-cancl-container' },
																																												_react2.default.createElement(
																																																'form',
																																																{ className: 'go-bottom' },
																																																_react2.default.createElement(
																																																				'div',
																																																				{ className: 'labelWrap' },
																																																				_react2.default.createElement('input', { id: 'Accname', name: 'name', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.name, required: true, ref: 'name', onKeyPress: this.handleEnterPress.bind(this), onBlur: this.handleSubmit.bind(this), style: { 'textTransform': 'capitalize' }, autoComplete: 'first_name' }),
																																																				_react2.default.createElement(
																																																								'label',
																																																								{ htmlFor: 'Accname' },
																																																								'Account Holder Name'
																																																				)
																																																),
																																																_react2.default.createElement(
																																																				'div',
																																																				{ className: 'labelWrap' },
																																																				_react2.default.createElement('input', { id: 'bankName', name: 'bankName', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.bankName, required: true, ref: 'bankName', onKeyPress: this.handleEnterPress.bind(this), onBlur: this.handleSubmit.bind(this), style: { 'textTransform': 'capitalize' }, autoComplete: 'bankName' }),
																																																				_react2.default.createElement(
																																																								'label',
																																																								{ htmlFor: 'bankName' },
																																																								'Bank Name'
																																																				)
																																																),
																																																_react2.default.createElement(
																																																				'div',
																																																				{ className: 'labelWrap' },
																																																				_react2.default.createElement('input', { id: 'address', name: 'address', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.address, required: true, ref: 'address', onKeyPress: this.handleEnterPress.bind(this), onBlur: this.handleSubmit.bind(this), style: { 'textTransform': 'capitalize' }, autoComplete: 'address' }),
																																																				_react2.default.createElement(
																																																								'label',
																																																								{ htmlFor: 'address' },
																																																								'Bank address'
																																																				)
																																																),
																																																_react2.default.createElement(
																																																				'div',
																																																				{ className: 'labelWrap' },
																																																				_react2.default.createElement('input', { id: 'accountNumber', name: 'accountNumber', type: 'number', onChange: this.inputHandler.bind(this), value: this.state.accountNumber, required: true, ref: 'accountNumber', onKeyPress: this.handleEnterPress.bind(this), onBlur: this.handleSubmit.bind(this), style: { 'textTransform': 'capitalize' }, autoComplete: 'accountNumber' }),
																																																				_react2.default.createElement(
																																																								'label',
																																																								{ htmlFor: 'accountNumber' },
																																																								'Account Number'
																																																				)
																																																),
																																																_react2.default.createElement(
																																																				'div',
																																																				{ className: 'labelWrap' },
																																																				_react2.default.createElement('input', { id: 'ifscCode', name: 'ifscCode', type: 'text', onChange: this.inputHandler.bind(this), value: this.state.ifscCode, required: true, ref: 'ifscCode', onKeyPress: this.handleEnterPress.bind(this), onBlur: this.handleSubmit.bind(this), style: { 'textTransform': 'capitalize' }, autoComplete: 'ifscCode' }),
																																																				_react2.default.createElement(
																																																								'label',
																																																								{ htmlFor: 'ifscCode' },
																																																								'IFSC Code'
																																																				)
																																																)
																																												)
																																								),
																																								this.state.isLoading ? _react2.default.createElement(
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
																																								this.state.img_url && this.state.img_id ? _react2.default.createElement(
																																												'div',
																																												null,
																																												_react2.default.createElement(
																																																'p',
																																																{ className: 'bank-prf' },
																																																'Bank Account Proof'
																																												),
																																												_react2.default.createElement(
																																																'div',
																																																{ className: 'ins-upld-doc-img' },
																																																_react2.default.createElement('img', { className: 'img-fluid ins-up-img-ic doc-ins-img', src: this.state.img_url }),
																																																_react2.default.createElement('img', { className: 'ins-img-cls-btn', onClick: this.removeImage.bind(this, this.state.img_url), src: "/assets" + '/img/chatclose.svg' })
																																												)
																																								) : _react2.default.createElement(
																																												_react2.default.Fragment,
																																												null,
																																												_react2.default.createElement(
																																																'p',
																																																{ className: 'ins-cancl-para' },
																																																'Please upload either of these documents to verify your account details. '
																																												),
																																												_react2.default.createElement(
																																																'span',
																																																{ className: 'ins-cn-btn', style: { cursor: 'pointer' }, onClick: function onClick() {
																																																								document.getElementById('imageFilePicker_').click();
																																																								document.getElementById('imageFilePicker_').value = "";
																																																				} },
																																																_react2.default.createElement('img', { src: "/assets" + '/img/upld.png' }),
																																																'Upload Cancelled Cheque',
																																																_react2.default.createElement('input', { type: 'file', style: { display: 'none', cursor: 'pointer' }, id: 'imageFilePicker_', onChange: this.pickFile.bind(this), accept: 'image/*' })
																																												),
																																												_react2.default.createElement(
																																																'p',
																																																{ className: 'ins-cancl-para' },
																																																'OR'
																																												),
																																												_react2.default.createElement(
																																																'span',
																																																{ className: 'ins-cn-btn', style: { cursor: 'pointer' }, onClick: function onClick() {
																																																								document.getElementById('imageFilePicker_').click();
																																																								document.getElementById('imageFilePicker_').value = "";
																																																				} },
																																																_react2.default.createElement('img', { src: "/assets" + "/img/upld.png" }),
																																																'Upload Account Statement',
																																																_react2.default.createElement('input', { type: 'file', style: { display: 'none', cursor: 'pointer' }, id: 'imageFilePicker_', onChange: this.pickFile.bind(this), accept: 'image/*' })
																																												)
																																								)
																																				)
																																)
																												),
																												_react2.default.createElement(
																																'button',
																																{ className: 'v-btn v-btn-primary btn-lg fixed horizontal bottom no-round btn-lg text-lg static-btn', onClick: this.submitForm.bind(this) },
																																'Submit'
																												)
																								),
																								_react2.default.createElement(_ChatPanel2.default, null)
																				)
																) : _react2.default.createElement(
																				'section',
																				{ className: 'container parent-section book-appointment-section container-top-margin' },
																				_react2.default.createElement(
																								'div',
																								{ className: 'row main-row parent-section-row' },
																								_react2.default.createElement(
																												'div',
																												{ className: 'col-12 col-md-7 col-lg-7' },
																												_react2.default.createElement(
																																'section',
																																{ className: 'profile-book-screen' },
																																_react2.default.createElement(
																																				'div',
																																				{ className: 'widget-content mrb-10' },
																																				_react2.default.createElement(
																																								'p',
																																								{ className: 'fw-500 text-center' },
																																								'Your Policy ',
																																								this.state.policy_number,
																																								' cancellation request has been initiated'
																																				)
																																),
																																_react2.default.createElement(
																																				'div',
																																				{ className: 'widget mrb-10' },
																																				_react2.default.createElement(
																																								'div',
																																								{ className: 'widget-content' },
																																								_react2.default.createElement(
																																												'p',
																																												{ className: 'mrb-10' },
																																												'Our team will get in touch with you shortly'
																																								),
																																								_react2.default.createElement(
																																												'p',
																																												null,
																																												' An email and sms has been sent to your registered email id and mobile number regarding the same '
																																								)
																																				)
																																),
																																_react2.default.createElement(
																																				'div',
																																				{ className: 'widget mrb-10' },
																																				_react2.default.createElement(
																																								'div',
																																								{ className: 'widget-content' },
																																								_react2.default.createElement(
																																												'p',
																																												null,
																																												' For any other query you contact us at '
																																								),
																																								_react2.default.createElement(
																																												'p',
																																												{ className: 'fw-500' },
																																												'1800-123-9419 '
																																								),
																																								_react2.default.createElement(
																																												'p',
																																												{ className: 'fw-500' },
																																												' customercare@docprime.com'
																																								)
																																				)
																																)
																												)
																								)
																				)
																)
												);
								}
				}]);

				return InsuranceCancellationView;
}(_react2.default.Component);

exports.default = InsuranceCancellationView;

/***/ }),

/***/ "./dev/js/containers/insurance/InsuranceBankDetails.js":
/*!*************************************************************!*\
  !*** ./dev/js/containers/insurance/InsuranceBankDetails.js ***!
  \*************************************************************/
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

var _insuranceBankDetailsView = __webpack_require__(/*! ../../components/insurance/insuranceBankDetailsView.js */ "./dev/js/components/insurance/insuranceBankDetailsView.js");

var _insuranceBankDetailsView2 = _interopRequireDefault(_insuranceBankDetailsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceBankDetails = function (_React$Component) {
    _inherits(InsuranceBankDetails, _React$Component);

    function InsuranceBankDetails(props) {
        _classCallCheck(this, InsuranceBankDetails);

        var _this = _possibleConstructorReturn(this, (InsuranceBankDetails.__proto__ || Object.getPrototypeOf(InsuranceBankDetails)).call(this, props));

        _this.state = {
            data: null
        };
        return _this;
    }

    _createClass(InsuranceBankDetails, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_insuranceBankDetailsView2.default, _extends({}, this.props, { data: this.state.data }));
        }
    }]);

    return InsuranceBankDetails;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    var USER = state.USER;
    var _state$INSURANCE = state.INSURANCE,
        insurer_bank_details = _state$INSURANCE.insurer_bank_details,
        cancel_reason = _state$INSURANCE.cancel_reason;

    return {
        insurer_bank_details: insurer_bank_details,
        cancel_reason: cancel_reason
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {

        cancelInsurance: function cancelInsurance(data, cb) {
            return dispatch((0, _index.cancelInsurance)(data, cb));
        },
        saveUserBankDetails: function saveUserBankDetails(criteria) {
            return dispatch((0, _index.saveUserBankDetails)(criteria));
        },
        uploadBankProof: function uploadBankProof(file, imgType, cb) {
            return dispatch((0, _index.uploadBankProof)(file, imgType, cb));
        },
        clearBankDetails: function clearBankDetails() {
            return dispatch((0, _index.clearBankDetails)());
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceBankDetails);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUJhbmtEZXRhaWxzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlQmFua0RldGFpbHMuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwicHJvcHMiLCJjbGFzc1R5cGUiLCJpRnJhbWVQb3B1cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29tcHJlc3MiLCJyZXF1aXJlIiwiSW5zdXJhbmNlQ2FuY2VsbGF0aW9uVmlldyIsInN0YXRlIiwic2hvd0NhbmNlbFBvcHVwIiwic2hvd0NhbmNlbFNlY3Rpb24iLCJuYW1lIiwiYmFua05hbWUiLCJhZGRyZXNzIiwiYWNjb3VudE51bWJlciIsImlmc2NDb2RlIiwiZXJyIiwiaW1nX3VybCIsImltZ19pZCIsImlzTG9hZGluZyIsInBvbGljeV9udW1iZXIiLCJzZXRTdGF0ZSIsImluc3VyZXJfYmFua19kZXRhaWxzIiwibiIsInMiLCJ2IiwidHlwZSIsImhpc3RvcnkiLCJwdXNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVnaXN0ZXIiLCJPYmplY3QiLCJrZXlzIiwicmVmcyIsImZvckVhY2giLCJwcnAiLCJpIiwidmFsaWRhdGVkIiwidGVzdCIsIm1hdGNoIiwic3R5bGUiLCJib3JkZXIiLCJTbmFja0JhciIsInNob3ciLCJwb3MiLCJ0ZXh0IiwiZGF0YSIsImJhbmtfbmFtZSIsImFjY291bnRfbnVtYmVyIiwiYWNjb3VudF9ob2xkZXJfbmFtZSIsImlmc2NfY29kZSIsImJhbmtfYWRkcmVzcyIsImltYWdlX2lkcyIsImNhbmNlbF9yZWFzb24iLCJjYW5jZWxJbnN1cmFuY2UiLCJyZXNwIiwic3VjY2VzcyIsImNsZWFyQmFua0RldGFpbHMiLCJrZXkiLCJzdWJtaXRGb3JtIiwiZmlsZXMiLCJmaWxlIiwiaW5jbHVkZXMiLCJmaW5pc2hDcm9wIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJpbWdFeHQiLCJleHQiLCJjb252ZXJ0QmFzZTY0VG9GaWxlIiwiZ2V0QmFzZTY0IiwiZGF0YVVybCIsImNhdGNoIiwiY2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZW1iZXJfaWQiLCJmaWxlX2Jsb2JfZGF0YSIsImRhdGFVUkl0b0Jsb2IiLCJtZW1fZGF0YSIsImV4aXN0aW5nRGF0YSIsImltZ190YWciLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVwbG9hZEJhbmtQcm9vZiIsImRvY3VtZW50X2ltYWdlIiwiaWQiLCJzYXZlVXNlckJhbmtEZXRhaWxzIiwiZGF0YVVSSSIsImJpbmFyeSIsImF0b2IiLCJzcGxpdCIsImFycmF5IiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsIkJsb2IiLCJVaW50OEFycmF5IiwiaW1nIiwicGFkZGluZ0JvdHRvbSIsImlucHV0SGFuZGxlciIsImJpbmQiLCJoYW5kbGVFbnRlclByZXNzIiwiaGFuZGxlU3VibWl0IiwicmVtb3ZlSW1hZ2UiLCJBU1NFVFNfQkFTRV9VUkwiLCJjdXJzb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJkaXNwbGF5IiwicGlja0ZpbGUiLCJJbnN1cmFuY2VCYW5rRGV0YWlscyIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJJTlNVUkFOQ0UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNyaXRlcmlhIiwiaW1nVHlwZSJdLCJtYXBwaW5ncyI6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d0gsT0FBT3hILE1BQU13SCxJQUFuQjtBQUQrQiwyQkFFY3hILE1BQU15SCxTQUZwQjtBQUFBLFFBRXpCM0csb0JBRnlCLG9CQUV6QkEsb0JBRnlCO0FBQUEsUUFFSGlDLGFBRkcsb0JBRUhBLGFBRkc7O0FBRy9CLFdBQU87QUFDSGpDLGtEQURHO0FBRUhpQztBQUZHLEtBQVA7QUFJSCxDQVBEOztBQVNBLElBQU0yRSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDckMsV0FBTzs7QUFFSDNFLHlCQUFpQix5QkFBQ1IsSUFBRCxFQUFNZ0MsRUFBTjtBQUFBLG1CQUFhbUQsU0FBUyw0QkFBZ0JuRixJQUFoQixFQUFxQmdDLEVBQXJCLENBQVQsQ0FBYjtBQUFBLFNBRmQ7QUFHSHNCLDZCQUFvQiw2QkFBQzhCLFFBQUQ7QUFBQSxtQkFBY0QsU0FBUyxnQ0FBb0JDLFFBQXBCLENBQVQsQ0FBZDtBQUFBLFNBSGpCO0FBSUhqQyx5QkFBZ0IseUJBQUNwQyxJQUFELEVBQU1zRSxPQUFOLEVBQWNyRCxFQUFkO0FBQUEsbUJBQW9CbUQsU0FBUyw0QkFBZ0JwRSxJQUFoQixFQUFxQnNFLE9BQXJCLEVBQTZCckQsRUFBN0IsQ0FBVCxDQUFwQjtBQUFBLFNBSmI7QUFLSHJCLDBCQUFpQjtBQUFBLG1CQUFNd0UsU0FBUyw4QkFBVCxDQUFOO0FBQUE7QUFMZCxLQUFQO0FBT0gsQ0FSRDs7a0JBWWUseUJBQVFKLGVBQVIsRUFBMEJHLGtCQUExQixFQUE4Q0osb0JBQTlDLEMiLCJmaWxlIjoiMTEwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1R5cGUgfHwgXCJsb2FkZXJDaXJjdWxhclwifSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcC1sb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaUZyYW1lUG9wdXAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnctNTAwIG1ydC0xMFwiPlJlZGlyZWN0aW5nIHlvdSB0byBQaGFybWVhc3kgd2Vic2l0ZS4uLjwvcD4gOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgQ2hhdFBhbmVsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9DaGF0UGFuZWwnXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbW1vbnMvTG9hZGVyJ1xuY29uc3QgQ29tcHJlc3MgPSByZXF1aXJlKCdjb21wcmVzcy5qcycpXG5pbXBvcnQgU25hY2tCYXIgZnJvbSAnbm9kZS1zbmFja2JhcidcblxuY2xhc3MgSW5zdXJhbmNlQ2FuY2VsbGF0aW9uVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dDYW5jZWxQb3B1cDogZmFsc2UsXG5cdFx0XHRzaG93Q2FuY2VsU2VjdGlvbjogdHJ1ZSxcblx0XHRcdG5hbWU6JycsXG5cdFx0XHRiYW5rTmFtZTonJyxcblx0XHRcdGFkZHJlc3M6JycsXG5cdFx0XHRhY2NvdW50TnVtYmVyOicnLFxuXHRcdFx0aWZzY0NvZGU6JycsXG5cdFx0XHRlcnI6JycsXG5cdFx0XHRpbWdfdXJsOm51bGwsXG5cdFx0XHRpbWdfaWQ6bnVsbCxcblx0XHRcdGlzTG9hZGluZzpmYWxzZSxcblx0XHRcdHBvbGljeV9udW1iZXI6bnVsbFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5wcm9wcy5pbnN1cmVyX2JhbmtfZGV0YWlscyB9KVxuICAgIH1cblxuXHRnZXRHZXRPcmRpbmFsKG4pIHtcblx0XHR2YXIgcyA9IFtcInRoXCIsIFwic3RcIiwgXCJuZFwiLCBcInJkXCJdLFxuXHRcdFx0diA9IG4gJSAxMDA7XG5cdFx0cmV0dXJuIG4gKyAoc1sodiAtIDIwKSAlIDEwXSB8fCBzW3ZdIHx8IHNbMF0pO1xuXHR9XG5cblx0Y2FuY2VsUG9saWN5KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93Q2FuY2VsUG9wdXA6IHRydWUgfSlcblx0fVxuXG5cdGNsaWNrUG9wVXAodHlwZSkge1xuXHRcdGlmICh0eXBlID09IDEpIHtcblx0XHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaW5zdXJhbmNlL2NhbmNlbGRldGFpbHMnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbFBvcHVwOiBmYWxzZSB9KVxuXHRcdH1cblx0fVxuXG5cdGlucHV0SGFuZGxlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG5cbiAgICB9XG5cblx0c3VibWl0Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycjogXCJcIiB9KVxuICAgICAgICAvLyB2YWxpZGF0ZVxuICAgICAgICBsZXQgcmVnaXN0ZXIgPSB0cnVlXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVmcykuZm9yRWFjaCgocHJwLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5yZWZzW3BycF0ubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZnNbcHJwXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9ICEvW15hLXpBLVogXS8udGVzdCh0aGlzLnJlZnNbcHJwXS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiYWNjb3VudE51bWJlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWZzW3BycF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRoaXMucmVmc1twcnBdLnZhbHVlLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImlmc2NDb2RlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZnNbcHJwXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdGhpcy5yZWZzW3BycF0udmFsdWUubWF0Y2goL15bNTY3ODldezF9WzAtOV17OX0kLylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiYmFua05hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVmc1twcnBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gIS9bXmEtekEtWiBdLy50ZXN0KHRoaXMucmVmc1twcnBdLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRyZXNzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZnNbcHJwXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9ICEvW15hLXpBLVogXS8udGVzdCh0aGlzLnJlZnNbcHJwXS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW3BycF0uc3R5bGUuYm9yZGVyID0gJydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW3BycF0uc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXIgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcblxuICAgICAgICBpZihyZWdpc3Rlcil7XG4gICAgICAgIFx0aWYoIXRoaXMuc3RhdGUuaW1nX3VybCl7XG4gICAgICAgIFx0XHRTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiUGxlYXNlIHVwbG9hZCByZXF1aXJlZCBkb2N1bWVudHMuXCIgfSk7XG4gICAgICAgIFx0fWVsc2V7XG4gICAgICAgIFx0XHRsZXQgZGF0YT17fVxuICAgICAgICBcdFx0ZGF0YS5iYW5rX25hbWUgPSB0aGlzLnN0YXRlLmJhbmtOYW1lXG5cdFx0XHRcdGRhdGEuYWNjb3VudF9udW1iZXIgPSB0aGlzLnN0YXRlLmFjY291bnROdW1iZXJcblx0XHRcdFx0ZGF0YS5hY2NvdW50X2hvbGRlcl9uYW1lID0gdGhpcy5zdGF0ZS5uYW1lXG5cdFx0XHRcdGRhdGEuaWZzY19jb2RlID0gdGhpcy5zdGF0ZS5pZnNjQ29kZVxuXHRcdFx0XHRkYXRhLmJhbmtfYWRkcmVzcyA9IHRoaXMuc3RhdGUuYWRkcmVzc1xuXHRcdFx0XHRkYXRhLmltYWdlX2lkcyA9IFt7J2RvY3VtZW50X2ltYWdlJzp0aGlzLnN0YXRlLmltZ19pZH1dXG5cdFx0XHRcdGRhdGEuY2FuY2VsX3JlYXNvbiA9IHRoaXMucHJvcHMuY2FuY2VsX3JlYXNvblxuXHQgICAgICAgIFx0dGhpcy5wcm9wcy5jYW5jZWxJbnN1cmFuY2UoZGF0YSwocmVzcCk9PiB7IC8vIHRvIHN1Ym1pdCB1c2VyIGNhbmNlbGxhdGlvbiByZXF1ZXN0XG5cdFx0XHRcdFx0aWYgKHJlc3Auc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5jbGVhckJhbmtEZXRhaWxzKCkgLy8gdG8gcmVzZXQgdXNlciBlbnRlcnRlZCBiYW5rIGRldGFpbHNcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwb2xpY3lfbnVtYmVyOnJlc3AucG9saWN5X251bWJlcixzaG93Q2FuY2VsU2VjdGlvbjpmYWxzZSB9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0ICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVFbnRlclByZXNzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBpY2tGaWxlKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0gJiYgZS50YXJnZXQuZmlsZXNbMF0ubmFtZS5pbmNsdWRlcygnLnBkZicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hDcm9wKG51bGwsIGZpbGUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzID0gbmV3IENvbXByZXNzKClcbiAgICAgICAgICAgICAgICBjb21wcmVzcy5jb21wcmVzcyhbZmlsZV0sIHtcbiAgICAgICAgICAgICAgICAgICAgcXVhbGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMTAwMCxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZzEgPSByZXN1bHRzWzBdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NHN0ciA9IGltZzEuZGF0YVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdFeHQgPSBpbWcxLmV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gQ29tcHJlc3MuY29udmVydEJhc2U2NFRvRmlsZShiYXNlNjRzdHIsIGltZ0V4dClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRCYXNlNjQoZmlsZSwgKGRhdGFVcmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3JvcChkYXRhVXJsLG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YVVybCB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFNuYWNrQmFyLnNob3coeyBwb3M6ICdib3R0b20tY2VudGVyJywgdGV4dDogXCJFcnJvciB1cGxvYWRpbmcgaW1hZ2UuXCIgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhc2U2NChmaWxlLCBjYikge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2IocmVhZGVyLnJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaENyb3AoZGF0YVVybCwgbWVtYmVyX2lkLCBmaWxlKSB7XG4gICAgICAgIGxldCBmaWxlX2Jsb2JfZGF0YVxuICAgICAgICBpZiAoZGF0YVVybCkge1xuICAgICAgICAgICAgZmlsZV9ibG9iX2RhdGEgPSB0aGlzLmRhdGFVUkl0b0Jsb2IoZGF0YVVybClcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWVtX2RhdGEgPSB7fVxuICAgICAgICBsZXQgZXhpc3RpbmdEYXRhXG4gICAgICAgIGxldCBpbWdfdGFnID0gXCJkb2N1bWVudF9pbWFnZVwiXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGF0YVVybDogbnVsbCxpc0xvYWRpbmc6dHJ1ZVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZChpbWdfdGFnLCBmaWxlLCBcImltYWdlRmlsZW5hbWUucGRmXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoaW1nX3RhZywgZmlsZV9ibG9iX2RhdGEsIFwiaW1hZ2VGaWxlbmFtZS5qcGVnXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwbG9hZEJhbmtQcm9vZihmb3JtX2RhdGEsJ2ltYWdlJywgKGRhdGEsIGVycikgPT4geyAvLyB0byB1cGxvYWQgcHJvb2ZzXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBcdHRoaXMuc2V0U3RhdGUoe2ltZ191cmw6ZGF0YS5kYXRhLmRvY3VtZW50X2ltYWdlLGltZ19pZDpkYXRhLmlkLGlzTG9hZGluZzpmYWxzZX0sKCk9PntcbiAgICAgICAgICAgICAgICBcdFx0dGhpcy5wcm9wcy5zYXZlVXNlckJhbmtEZXRhaWxzKHRoaXMuc3RhdGUpIC8vIHRvIHNhdmUgdXNlciBlbnRlcmVkIGJhbmsgZGV0YWlscyBpbiBzdG9yZVxuICAgICAgICAgICAgICAgIFx0fSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRhdGFVUkl0b0Jsb2IoZGF0YVVSSSkge1xuICAgICAgICB2YXIgYmluYXJ5ID0gYXRvYihkYXRhVVJJLnNwbGl0KCcsJylbMV0pO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaW5hcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goYmluYXJ5LmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXSwgeyB0eXBlOiAnaW1hZ2UvanBlZycgfSk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUltYWdlKGltZyl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltZ191cmw6bnVsbCxpbWdfaWQ6bnVsbH0sKCk9PntcbiAgICAgICAgXHR0aGlzLnByb3BzLnNhdmVVc2VyQmFua0RldGFpbHModGhpcy5zdGF0ZSkgLy8gdG8gc2F2ZSB1c2VyIGVudGVyZWQgYmFuayBkZXRhaWxzIGluIHN0b3JlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KCl7XG4gICAgXHR0aGlzLnByb3BzLnNhdmVVc2VyQmFua0RldGFpbHModGhpcy5zdGF0ZSkgLy8gdG8gc2F2ZSB1c2VyIGVudGVyZWQgYmFuayBkZXRhaWxzIGluIHN0b3JlXG4gICAgfVxuICAgIFxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXBcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiA4MCB9fSA+XG5cdFx0XHQ8UHJvZmlsZUhlYWRlciBzaG93UGFja2FnZVN0cmlwPXt0cnVlfS8+XG5cdFx0XHR7dGhpcy5zdGF0ZS5zaG93Q2FuY2VsU2VjdGlvbj9cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIHBhcmVudC1zZWN0aW9uIGJvb2stYXBwb2ludG1lbnQtc2VjdGlvbiBjb250YWluZXItdG9wLW1hcmdpblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1haW4tcm93IHBhcmVudC1zZWN0aW9uLXJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTcgY29sLWxnLTdcIj5cblx0XHRcdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZmlsZS1ib29rLXNjcmVlblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJpbnMtY2FuY2wtaGVhZGluZ1wiPldlIG5lZWQgYmFuayBhY2NvdW50IGRldGFpbHMgdG8gcHJvY2VlZCB3aXRoIHlvdXIgY2FuY2VsbGF0aW9uPC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnMtY2FuY2wtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwiZ28tYm90dG9tXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJBY2NuYW1lXCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSByZXF1aXJlZCByZWY9XCJuYW1lXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319IGF1dG9Db21wbGV0ZT1cImZpcnN0X25hbWVcIi8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiQWNjbmFtZVwiPkFjY291bnQgSG9sZGVyIE5hbWU8L2xhYmVsPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYmFua05hbWVcIiBuYW1lPVwiYmFua05hbWVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5iYW5rTmFtZX0gcmVxdWlyZWQgcmVmPVwiYmFua05hbWVcIiBvbktleVByZXNzPXt0aGlzLmhhbmRsZUVudGVyUHJlc3MuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gYXV0b0NvbXBsZXRlPVwiYmFua05hbWVcIi8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYmFua05hbWVcIj5CYW5rIE5hbWU8L2xhYmVsPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxpbnB1dCBpZD1cImFkZHJlc3NcIiBuYW1lPVwiYWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9IHJlcXVpcmVkIHJlZj1cImFkZHJlc3NcIiBvbktleVByZXNzPXt0aGlzLmhhbmRsZUVudGVyUHJlc3MuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gYXV0b0NvbXBsZXRlPVwiYWRkcmVzc1wiLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+QmFuayBhZGRyZXNzPC9sYWJlbD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImFjY291bnROdW1iZXJcIiBuYW1lPVwiYWNjb3VudE51bWJlclwiIHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuYWNjb3VudE51bWJlcn0gcmVxdWlyZWQgcmVmPVwiYWNjb3VudE51bWJlclwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fSBhdXRvQ29tcGxldGU9XCJhY2NvdW50TnVtYmVyXCIvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFjY291bnROdW1iZXJcIj5BY2NvdW50IE51bWJlcjwvbGFiZWw+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpZnNjQ29kZVwiIG5hbWU9XCJpZnNjQ29kZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmlmc2NDb2RlfSByZXF1aXJlZCByZWY9XCJpZnNjQ29kZVwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fSBhdXRvQ29tcGxldGU9XCJpZnNjQ29kZVwiLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpZnNjQ29kZVwiPklGU0MgQ29kZTwvbGFiZWw+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuaXNMb2FkaW5nP1xuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucy1wcmYtaW1nLWdyZCBkLWJsb2NrXCI+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1mb3ItY2hhdC1kaXYgbXQtMFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXItZm9yLWNoYXQgbWItMCc+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDonJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuaW1nX3VybCAmJiB0aGlzLnN0YXRlLmltZ19pZD9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImJhbmstcHJmXCI+QmFuayBBY2NvdW50IFByb29mPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLXVwbGQtZG9jLWltZ1wiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpbnMtdXAtaW1nLWljIGRvYy1pbnMtaW1nXCIgc3JjPXt0aGlzLnN0YXRlLmltZ191cmx9IC8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5zLWltZy1jbHMtYnRuXCIgb25DbGljaz17dGhpcy5yZW1vdmVJbWFnZS5iaW5kKHRoaXMsdGhpcy5zdGF0ZS5pbWdfdXJsKX0gc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy9jaGF0Y2xvc2Uuc3ZnJ30gLz5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0OjxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLWNhbmNsLXBhcmFcIj5QbGVhc2UgdXBsb2FkIGVpdGhlciBvZiB0aGVzZSBkb2N1bWVudHMgdG8gdmVyaWZ5IHlvdXIgYWNjb3VudCBkZXRhaWxzLiA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImlucy1jbi1idG5cIiBzdHlsZT17eyBjdXJzb3I6J3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyXycpLmNsaWNrKClcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyXycpLnZhbHVlID0gXCJcIiB9fT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3VwbGQucG5nJ30vPlVwbG9hZCBDYW5jZWxsZWQgQ2hlcXVlXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsY3Vyc29yOidwb2ludGVyJyB9fSBpZD17YGltYWdlRmlsZVBpY2tlcl9gfSBvbkNoYW5nZT17dGhpcy5waWNrRmlsZS5iaW5kKHRoaXMpfSBhY2NlcHQ9XCJpbWFnZS8qXCIvPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5zLWNhbmNsLXBhcmFcIj5PUjwvcD5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucy1jbi1idG5cIiBzdHlsZT17eyBjdXJzb3I6J3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyXycpLmNsaWNrKClcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VGaWxlUGlja2VyXycpLnZhbHVlID0gXCJcIiB9fT5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy91cGxkLnBuZ1wifS8+VXBsb2FkIEFjY291bnQgU3RhdGVtZW50XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsY3Vyc29yOidwb2ludGVyJyB9fSBpZD17YGltYWdlRmlsZVBpY2tlcl9gfSBvbkNoYW5nZT17dGhpcy5waWNrRmlsZS5iaW5kKHRoaXMpfSBhY2NlcHQ9XCJpbWFnZS8qXCIvPlxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8cCBjbGFzc05hbWU9XCJpbnMtY2FuY2wtcGFyYVwiPldlIG5lZWQgdG8gY29uZmlybSBpZiB0aGlzIGFjY291bnQgYmVsb25ncyB0byB5b3UuIFBsZWFzZSBmaWxsIG1vcmUgZGV0YWlscyBiZWxvdyA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW5zLWNuLWJ0blwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy91cGxkLnBuZyd9IC8+VXBsb2FkIENhbmNlbGxlZCBDaGVxdWU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW5zLWNhbmNsLXBhcmFcIj5PUjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJpbnMtY24tYnRuXCI+PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArICcvaW1nL3VwbGQucG5nJ30gLz5VcGxvYWQgQWNjb3VudCBTdGF0ZW1lbnQ8L2J1dHRvbj4qL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidi1idG4gdi1idG4tcHJpbWFyeSBidG4tbGcgZml4ZWQgaG9yaXpvbnRhbCBib3R0b20gbm8tcm91bmQgYnRuLWxnIHRleHQtbGcgc3RhdGljLWJ0blwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PENoYXRQYW5lbCAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ6XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb24gY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03XCI+XG5cdFx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50IG1yYi0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFlvdXIgUG9saWN5IHt0aGlzLnN0YXRlLnBvbGljeV9udW1iZXJ9IGNhbmNlbGxhdGlvbiByZXF1ZXN0IGhhcyBiZWVuIGluaXRpYXRlZFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtcmItMTBcIj5PdXIgdGVhbSB3aWxsIGdldCBpbiB0b3VjaCB3aXRoIHlvdSBzaG9ydGx5PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD4gQW4gZW1haWwgYW5kIHNtcyBoYXMgYmVlbiBzZW50IHRvIHlvdXIgcmVnaXN0ZXJlZCBlbWFpbCBpZCBhbmQgbW9iaWxlIG51bWJlciByZWdhcmRpbmcgdGhlIHNhbWUgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgbXJiLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPiBGb3IgYW55IG90aGVyIHF1ZXJ5IHlvdSBjb250YWN0IHVzIGF0IDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZnctNTAwXCI+MTgwMC0xMjMtOTQxOSA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPiBjdXN0b21lcmNhcmVAZG9jcHJpbWUuY29tPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VDYW5jZWxsYXRpb25WaWV3ICAgICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IGNhbmNlbEluc3VyYW5jZSwgY2FuY2VsbGVkSW5zdXJhbmNlRGV0YWlscywgc2F2ZVVzZXJCYW5rRGV0YWlscywgdXBsb2FkQmFua1Byb29mLGNsZWFyQmFua0RldGFpbHN9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgSW5zdXJhbmNlQmFua0RldGFpbHNWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUJhbmtEZXRhaWxzVmlldy5qcydcblxuY2xhc3MgSW5zdXJhbmNlQmFua0RldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGRhdGE6bnVsbFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8SW5zdXJhbmNlQmFua0RldGFpbHNWaWV3IHsuLi50aGlzLnByb3BzfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9Lz5cblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBVU0VSID0gc3RhdGUuVVNFUlxuICAgIGxldCB7IGluc3VyZXJfYmFua19kZXRhaWxzLCBjYW5jZWxfcmVhc29ufSA9IHN0YXRlLklOU1VSQU5DRVxuICAgIHJldHVybiB7XG4gICAgICAgIGluc3VyZXJfYmFua19kZXRhaWxzLFxuICAgICAgICBjYW5jZWxfcmVhc29uXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGNhbmNlbEluc3VyYW5jZSA6KGRhdGEsY2IpID0+IGRpc3BhdGNoKGNhbmNlbEluc3VyYW5jZShkYXRhLGNiKSksXG4gICAgICAgIHNhdmVVc2VyQmFua0RldGFpbHM6KGNyaXRlcmlhKSA9PiBkaXNwYXRjaChzYXZlVXNlckJhbmtEZXRhaWxzKGNyaXRlcmlhKSksXG4gICAgICAgIHVwbG9hZEJhbmtQcm9vZjooZmlsZSxpbWdUeXBlLGNiKSA9PmRpc3BhdGNoKHVwbG9hZEJhbmtQcm9vZihmaWxlLGltZ1R5cGUsY2IpKSxcbiAgICAgICAgY2xlYXJCYW5rRGV0YWlsczooKSA9PiBkaXNwYXRjaChjbGVhckJhbmtEZXRhaWxzKCkpXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMgLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluc3VyYW5jZUJhbmtEZXRhaWxzKSJdLCJzb3VyY2VSb290IjoiIn0=