exports.ids = [88];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _ChatPanel = __webpack_require__(/*! ../../components/commons/ChatPanel */ "./dev/js/components/commons/ChatPanel/index.js");

var _ChatPanel2 = _interopRequireDefault(_ChatPanel);

var _Loader = __webpack_require__(/*! ../commons/Loader */ "./dev/js/components/commons/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _nodeSnackbar = __webpack_require__(/*! node-snackbar */ "node-snackbar");

var _nodeSnackbar2 = _interopRequireDefault(_nodeSnackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Compress = __webpack_require__(/*! compress.js */ "compress.js");


class InsuranceCancellationView extends _react2.default.Component {
				constructor(props) {
								super(props);
								this.state = {
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
				}

				componentDidMount() {
								this.setState(_extends({}, this.props.insurer_bank_details));
				}

				getGetOrdinal(n) {
								var s = ["th", "st", "nd", "rd"],
								    v = n % 100;
								return n + (s[(v - 20) % 10] || s[v] || s[0]);
				}

				cancelPolicy() {
								this.setState({ showCancelPopup: true });
				}

				clickPopUp(type) {
								if (type == 1) {
												this.props.history.push('/insurance/canceldetails');
								} else {
												this.setState({ showCancelPopup: false });
								}
				}

				inputHandler(e) {
								this.setState({ [e.target.name]: e.target.value });
				}

				submitForm() {
								this.setState({ err: "" });
								// validate
								let register = true;
								Object.keys(this.refs).forEach((prp, i) => {
												let validated = false;
												switch (this.refs[prp].name) {
																case "name":
																				{
																								if (!this.refs[prp].value) {
																												validated = false;
																								} else {
																												validated = !/[^a-zA-Z ]/.test(this.refs[prp].value);
																								}
																								break;
																				}
																case "accountNumber":
																				{
																								if (!this.refs[prp].value) {
																												validated = this.refs[prp].value.match(/^[56789]{1}[0-9]{9}$/);
																								} else {
																												validated = true;
																								}
																								break;
																				}
																case "ifscCode":
																				{
																								if (!this.refs[prp].value) {
																												validated = this.refs[prp].value.match(/^[56789]{1}[0-9]{9}$/);
																								} else {
																												validated = true;
																								}
																								break;
																				}
																case "bankName":
																				{
																								if (!this.refs[prp].value) {
																												validated = false;
																								} else {
																												validated = !/[^a-zA-Z ]/.test(this.refs[prp].value);
																								}
																								break;
																				}
																case "address":
																				{
																								if (!this.refs[prp].value) {
																												validated = false;
																								} else {
																												validated = !/[^a-zA-Z ]/.test(this.refs[prp].value);
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
																this.refs[prp].style.border = '';
												} else {
																this.refs[prp].style.border = '1px solid red';
																register = false;
												}
								});

								if (register) {
												if (!this.state.img_url) {
																_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Please upload required documents." });
												} else {
																let data = {};
																data.bank_name = this.state.bankName;
																data.account_number = this.state.accountNumber;
																data.account_holder_name = this.state.name;
																data.ifsc_code = this.state.ifscCode;
																data.bank_address = this.state.address;
																data.image_ids = [{ 'document_image': this.state.img_id }];
																data.cancel_reason = this.props.cancel_reason;
																this.props.cancelInsurance(data, resp => {
																				// to submit user cancellation request
																				if (resp.success) {
																								this.props.clearBankDetails(); // to reset user enterted bank details
																								this.setState({ policy_number: resp.policy_number, showCancelSection: false });
																				}
																});
												}
								}
				}

				handleEnterPress(e) {
								if (e.key === 'Enter') {
												this.submitForm();
								}
				}

				pickFile(e) {
								if (e.target.files && e.target.files[0]) {
												let file = e.target.files[0];
												if (e.target.files[0] && e.target.files[0].name.includes('.pdf')) {
																this.finishCrop(null, file);
												} else {
																const compress = new Compress();
																compress.compress([file], {
																				quality: 1,
																				maxWidth: 1000,
																				maxHeight: 1000
																}).then(results => {
																				const img1 = results[0];
																				const base64str = img1.data;
																				const imgExt = img1.ext;
																				const file = Compress.convertBase64ToFile(base64str, imgExt);
																				this.getBase64(file, dataUrl => {
																								this.finishCrop(dataUrl, null);
																								this.setState({ dataUrl });
																				});
																}).catch(e => {
																				_nodeSnackbar2.default.show({ pos: 'bottom-center', text: "Error uploading image." });
																});
												}
								}
				}

				getBase64(file, cb) {
								var reader = new FileReader();
								reader.readAsDataURL(file);
								reader.onload = function () {
												cb(reader.result);
								};
								reader.onerror = function (error) {
												console.log('Error: ', error);
								};
				}

				finishCrop(dataUrl, member_id, file) {
								let file_blob_data;
								if (dataUrl) {
												file_blob_data = this.dataURItoBlob(dataUrl);
								}
								let mem_data = {};
								let existingData;
								let img_tag = "document_image";
								this.setState({
												dataUrl: null, isLoading: true
								}, () => {
												let form_data = new FormData();
												if (file) {
																form_data.append(img_tag, file, "imageFilename.pdf");
												} else {
																form_data.append(img_tag, file_blob_data, "imageFilename.jpeg");
												}
												this.props.uploadBankProof(form_data, 'image', (data, err) => {
																// to upload proofs
																if (data) {
																				this.setState({ img_url: data.data.document_image, img_id: data.id, isLoading: false }, () => {
																								this.props.saveUserBankDetails(this.state); // to save user entered bank details in store
																				});
																}
												});
								});
				}

				dataURItoBlob(dataURI) {
								var binary = atob(dataURI.split(',')[1]);
								var array = [];
								for (var i = 0; i < binary.length; i++) {
												array.push(binary.charCodeAt(i));
								}
								return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
				}

				removeImage(img) {
								this.setState({ img_url: null, img_id: null }, () => {
												this.props.saveUserBankDetails(this.state); // to save user entered bank details in store
								});
				}

				handleSubmit() {
								this.props.saveUserBankDetails(this.state); // to save user entered bank details in store
				}

				render() {
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
																																												{ className: 'ins-cn-btn', style: { cursor: 'pointer' }, onClick: () => {
																																																				document.getElementById('imageFilePicker_').click();
																																																				document.getElementById('imageFilePicker_').value = "";
																																																} },
																																												_react2.default.createElement('img', { src: "/assets" + '/img/upld.png' }),
																																												'Upload Cancelled Cheque',
																																												_react2.default.createElement('input', { type: 'file', style: { display: 'none', cursor: 'pointer' }, id: `imageFilePicker_`, onChange: this.pickFile.bind(this), accept: 'image/*' })
																																								),
																																								_react2.default.createElement(
																																												'p',
																																												{ className: 'ins-cancl-para' },
																																												'OR'
																																								),
																																								_react2.default.createElement(
																																												'span',
																																												{ className: 'ins-cn-btn', style: { cursor: 'pointer' }, onClick: () => {
																																																				document.getElementById('imageFilePicker_').click();
																																																				document.getElementById('imageFilePicker_').value = "";
																																																} },
																																												_react2.default.createElement('img', { src: "/assets" + "/img/upld.png" }),
																																												'Upload Account Statement',
																																												_react2.default.createElement('input', { type: 'file', style: { display: 'none', cursor: 'pointer' }, id: `imageFilePicker_`, onChange: this.pickFile.bind(this), accept: 'image/*' })
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

var _insuranceBankDetailsView = __webpack_require__(/*! ../../components/insurance/insuranceBankDetailsView.js */ "./dev/js/components/insurance/insuranceBankDetailsView.js");

var _insuranceBankDetailsView2 = _interopRequireDefault(_insuranceBankDetailsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class InsuranceBankDetails extends _react2.default.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    render() {
        return _react2.default.createElement(_insuranceBankDetailsView2.default, _extends({}, this.props, { data: this.state.data }));
    }
}

const mapStateToProps = state => {
    const USER = state.USER;
    let { insurer_bank_details, cancel_reason } = state.INSURANCE;
    return {
        insurer_bank_details,
        cancel_reason
    };
};

const mapDispatchToProps = dispatch => {
    return {

        cancelInsurance: (data, cb) => dispatch((0, _index.cancelInsurance)(data, cb)),
        saveUserBankDetails: criteria => dispatch((0, _index.saveUserBankDetails)(criteria)),
        uploadBankProof: (file, imgType, cb) => dispatch((0, _index.uploadBankProof)(file, imgType, cb)),
        clearBankDetails: () => dispatch((0, _index.clearBankDetails)())
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsuranceBankDetails);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvaW5zdXJhbmNlL2luc3VyYW5jZUJhbmtEZXRhaWxzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pbnN1cmFuY2UvSW5zdXJhbmNlQmFua0RldGFpbHMuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiY2xhc3NUeXBlIiwiaUZyYW1lUG9wdXAiLCJDb21wcmVzcyIsInJlcXVpcmUiLCJJbnN1cmFuY2VDYW5jZWxsYXRpb25WaWV3Iiwic3RhdGUiLCJzaG93Q2FuY2VsUG9wdXAiLCJzaG93Q2FuY2VsU2VjdGlvbiIsIm5hbWUiLCJiYW5rTmFtZSIsImFkZHJlc3MiLCJhY2NvdW50TnVtYmVyIiwiaWZzY0NvZGUiLCJlcnIiLCJpbWdfdXJsIiwiaW1nX2lkIiwiaXNMb2FkaW5nIiwicG9saWN5X251bWJlciIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJpbnN1cmVyX2JhbmtfZGV0YWlscyIsImdldEdldE9yZGluYWwiLCJuIiwicyIsInYiLCJjYW5jZWxQb2xpY3kiLCJjbGlja1BvcFVwIiwidHlwZSIsImhpc3RvcnkiLCJwdXNoIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3VibWl0Rm9ybSIsInJlZ2lzdGVyIiwiT2JqZWN0Iiwia2V5cyIsInJlZnMiLCJmb3JFYWNoIiwicHJwIiwiaSIsInZhbGlkYXRlZCIsInRlc3QiLCJtYXRjaCIsInN0eWxlIiwiYm9yZGVyIiwiU25hY2tCYXIiLCJzaG93IiwicG9zIiwidGV4dCIsImRhdGEiLCJiYW5rX25hbWUiLCJhY2NvdW50X251bWJlciIsImFjY291bnRfaG9sZGVyX25hbWUiLCJpZnNjX2NvZGUiLCJiYW5rX2FkZHJlc3MiLCJpbWFnZV9pZHMiLCJjYW5jZWxfcmVhc29uIiwiY2FuY2VsSW5zdXJhbmNlIiwicmVzcCIsInN1Y2Nlc3MiLCJjbGVhckJhbmtEZXRhaWxzIiwiaGFuZGxlRW50ZXJQcmVzcyIsImtleSIsInBpY2tGaWxlIiwiZmlsZXMiLCJmaWxlIiwiaW5jbHVkZXMiLCJmaW5pc2hDcm9wIiwiY29tcHJlc3MiLCJxdWFsaXR5IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ0aGVuIiwicmVzdWx0cyIsImltZzEiLCJiYXNlNjRzdHIiLCJpbWdFeHQiLCJleHQiLCJjb252ZXJ0QmFzZTY0VG9GaWxlIiwiZ2V0QmFzZTY0IiwiZGF0YVVybCIsImNhdGNoIiwiY2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZW1iZXJfaWQiLCJmaWxlX2Jsb2JfZGF0YSIsImRhdGFVUkl0b0Jsb2IiLCJtZW1fZGF0YSIsImV4aXN0aW5nRGF0YSIsImltZ190YWciLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVwbG9hZEJhbmtQcm9vZiIsImRvY3VtZW50X2ltYWdlIiwiaWQiLCJzYXZlVXNlckJhbmtEZXRhaWxzIiwiZGF0YVVSSSIsImJpbmFyeSIsImF0b2IiLCJzcGxpdCIsImFycmF5IiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsIkJsb2IiLCJVaW50OEFycmF5IiwicmVtb3ZlSW1hZ2UiLCJpbWciLCJoYW5kbGVTdWJtaXQiLCJwYWRkaW5nQm90dG9tIiwiYmluZCIsIkFTU0VUU19CQVNFX1VSTCIsImN1cnNvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsImRpc3BsYXkiLCJJbnN1cmFuY2VCYW5rRGV0YWlscyIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVTRVIiLCJJTlNVUkFOQ0UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNyaXRlcmlhIiwiaW1nVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsZ0JBQU1DLFNBQTNCLENBQXFDO0FBQ2pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDSDs7QUFFREMsYUFBUzs7QUFFTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVcsS0FBS0QsS0FBTCxDQUFXRSxTQUFYLElBQXdCLGdCQUF4QztBQUNJLG1EQUFLLFdBQVUsV0FBZixHQURKO0FBR1EsaUJBQUtGLEtBQUwsQ0FBV0csV0FBWCxHQUNJO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGVBQWI7QUFBQTtBQUFBLGFBREosR0FDK0U7QUFKdkYsU0FESjtBQVNIO0FBaEJnQzs7a0JBbUJ0QlAsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7a0JBRWVBLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQURBLE1BQU1RLFdBQVdDLG1CQUFPQSxDQUFDLGdDQUFSLENBQWpCOzs7QUFHQSxNQUFNQyx5QkFBTixTQUF3Q1QsZ0JBQU1DLFNBQTlDLENBQXdEO0FBQ3ZEQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNsQixjQUFNQSxLQUFOO0FBQ0EsYUFBS08sS0FBTCxHQUFhO0FBQ1pDLDZCQUFpQixLQURMO0FBRVpDLCtCQUFtQixJQUZQO0FBR1pDLGtCQUFLLEVBSE87QUFJWkMsc0JBQVMsRUFKRztBQUtaQyxxQkFBUSxFQUxJO0FBTVpDLDJCQUFjLEVBTkY7QUFPWkMsc0JBQVMsRUFQRztBQVFaQyxpQkFBSSxFQVJRO0FBU1pDLHFCQUFRLElBVEk7QUFVWkMsb0JBQU8sSUFWSztBQVdaQyx1QkFBVSxLQVhFO0FBWVpDLDJCQUFjO0FBWkYsU0FBYjtBQWNBOztBQUVEQyx3QkFBb0I7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QUFFSnBELGFBQVE7QUFDUCxlQUNDLDhCQUFDLGtDQUFELGVBQThCLEtBQUtELEtBQW5DLElBQTBDLE1BQU0sS0FBS08sS0FBTCxDQUFXOEMsSUFBM0QsSUFERDtBQUdBO0FBYmdEOztBQWdCbEQsTUFBTTZFLGtCQUFtQjNILEtBQUQsSUFBVztBQUMvQixVQUFNNEgsT0FBTzVILE1BQU00SCxJQUFuQjtBQUNBLFFBQUksRUFBRTdHLG9CQUFGLEVBQXdCc0MsYUFBeEIsS0FBeUNyRCxNQUFNNkgsU0FBbkQ7QUFDQSxXQUFPO0FBQ0g5Ryw0QkFERztBQUVIc0M7QUFGRyxLQUFQO0FBSUgsQ0FQRDs7QUFTQSxNQUFNeUUscUJBQXNCQyxRQUFELElBQWM7QUFDckMsV0FBTzs7QUFFSHpFLHlCQUFpQixDQUFDUixJQUFELEVBQU1pQyxFQUFOLEtBQWFnRCxTQUFTLDRCQUFnQmpGLElBQWhCLEVBQXFCaUMsRUFBckIsQ0FBVCxDQUYzQjtBQUdIc0IsNkJBQXFCMkIsUUFBRCxJQUFjRCxTQUFTLGdDQUFvQkMsUUFBcEIsQ0FBVCxDQUgvQjtBQUlIOUIseUJBQWdCLENBQUNwQyxJQUFELEVBQU1tRSxPQUFOLEVBQWNsRCxFQUFkLEtBQW9CZ0QsU0FBUyw0QkFBZ0JqRSxJQUFoQixFQUFxQm1FLE9BQXJCLEVBQTZCbEQsRUFBN0IsQ0FBVCxDQUpqQztBQUtIdEIsMEJBQWlCLE1BQU1zRSxTQUFTLDhCQUFUO0FBTHBCLEtBQVA7QUFPSCxDQVJEOztrQkFZZSx5QkFBUUosZUFBUixFQUEwQkcsa0JBQTFCLEVBQThDSixvQkFBOUMsQyIsImZpbGUiOiI4OC5zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUeXBlIHx8IFwibG9hZGVyQ2lyY3VsYXJcIn0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHAtbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlGcmFtZVBvcHVwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ3LTUwMCBtcnQtMTBcIj5SZWRpcmVjdGluZyB5b3UgdG8gUGhhcm1lYXN5IHdlYnNpdGUuLi48L3A+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuL0xvYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0Rlc2t0b3BQcm9maWxlSGVhZGVyJ1xuaW1wb3J0IENoYXRQYW5lbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbnMvQ2hhdFBhbmVsJ1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21tb25zL0xvYWRlcidcbmNvbnN0IENvbXByZXNzID0gcmVxdWlyZSgnY29tcHJlc3MuanMnKVxuaW1wb3J0IFNuYWNrQmFyIGZyb20gJ25vZGUtc25hY2tiYXInXG5cbmNsYXNzIEluc3VyYW5jZUNhbmNlbGxhdGlvblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93Q2FuY2VsUG9wdXA6IGZhbHNlLFxuXHRcdFx0c2hvd0NhbmNlbFNlY3Rpb246IHRydWUsXG5cdFx0XHRuYW1lOicnLFxuXHRcdFx0YmFua05hbWU6JycsXG5cdFx0XHRhZGRyZXNzOicnLFxuXHRcdFx0YWNjb3VudE51bWJlcjonJyxcblx0XHRcdGlmc2NDb2RlOicnLFxuXHRcdFx0ZXJyOicnLFxuXHRcdFx0aW1nX3VybDpudWxsLFxuXHRcdFx0aW1nX2lkOm51bGwsXG5cdFx0XHRpc0xvYWRpbmc6ZmFsc2UsXG5cdFx0XHRwb2xpY3lfbnVtYmVyOm51bGxcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMucHJvcHMuaW5zdXJlcl9iYW5rX2RldGFpbHMgfSlcbiAgICB9XG5cblx0Z2V0R2V0T3JkaW5hbChuKSB7XG5cdFx0dmFyIHMgPSBbXCJ0aFwiLCBcInN0XCIsIFwibmRcIiwgXCJyZFwiXSxcblx0XHRcdHYgPSBuICUgMTAwO1xuXHRcdHJldHVybiBuICsgKHNbKHYgLSAyMCkgJSAxMF0gfHwgc1t2XSB8fCBzWzBdKTtcblx0fVxuXG5cdGNhbmNlbFBvbGljeSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd0NhbmNlbFBvcHVwOiB0cnVlIH0pXG5cdH1cblxuXHRjbGlja1BvcFVwKHR5cGUpIHtcblx0XHRpZiAodHlwZSA9PSAxKSB7XG5cdFx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2luc3VyYW5jZS9jYW5jZWxkZXRhaWxzJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dDYW5jZWxQb3B1cDogZmFsc2UgfSlcblx0XHR9XG5cdH1cblxuXHRpbnB1dEhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuXG4gICAgfVxuXG5cdHN1Ym1pdEZvcm0oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnI6IFwiXCIgfSlcbiAgICAgICAgLy8gdmFsaWRhdGVcbiAgICAgICAgbGV0IHJlZ2lzdGVyID0gdHJ1ZVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlZnMpLmZvckVhY2goKHBycCwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucmVmc1twcnBdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWZzW3BycF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSAhL1teYS16QS1aIF0vLnRlc3QodGhpcy5yZWZzW3BycF0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImFjY291bnROdW1iZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVmc1twcnBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0aGlzLnJlZnNbcHJwXS52YWx1ZS5tYXRjaCgvXls1Njc4OV17MX1bMC05XXs5fSQvKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJpZnNjQ29kZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWZzW3BycF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRoaXMucmVmc1twcnBdLnZhbHVlLm1hdGNoKC9eWzU2Nzg5XXsxfVswLTldezl9JC8pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcImJhbmtOYW1lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZnNbcHJwXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9ICEvW15hLXpBLVogXS8udGVzdCh0aGlzLnJlZnNbcHJwXS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiYWRkcmVzc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWZzW3BycF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSAhL1teYS16QS1aIF0vLnRlc3QodGhpcy5yZWZzW3BycF0udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmc1twcnBdLnN0eWxlLmJvcmRlciA9ICcnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmc1twcnBdLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJ1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICAgICAgaWYocmVnaXN0ZXIpe1xuICAgICAgICBcdGlmKCF0aGlzLnN0YXRlLmltZ191cmwpe1xuICAgICAgICBcdFx0U25hY2tCYXIuc2hvdyh7IHBvczogJ2JvdHRvbS1jZW50ZXInLCB0ZXh0OiBcIlBsZWFzZSB1cGxvYWQgcmVxdWlyZWQgZG9jdW1lbnRzLlwiIH0pO1xuICAgICAgICBcdH1lbHNle1xuICAgICAgICBcdFx0bGV0IGRhdGE9e31cbiAgICAgICAgXHRcdGRhdGEuYmFua19uYW1lID0gdGhpcy5zdGF0ZS5iYW5rTmFtZVxuXHRcdFx0XHRkYXRhLmFjY291bnRfbnVtYmVyID0gdGhpcy5zdGF0ZS5hY2NvdW50TnVtYmVyXG5cdFx0XHRcdGRhdGEuYWNjb3VudF9ob2xkZXJfbmFtZSA9IHRoaXMuc3RhdGUubmFtZVxuXHRcdFx0XHRkYXRhLmlmc2NfY29kZSA9IHRoaXMuc3RhdGUuaWZzY0NvZGVcblx0XHRcdFx0ZGF0YS5iYW5rX2FkZHJlc3MgPSB0aGlzLnN0YXRlLmFkZHJlc3Ncblx0XHRcdFx0ZGF0YS5pbWFnZV9pZHMgPSBbeydkb2N1bWVudF9pbWFnZSc6dGhpcy5zdGF0ZS5pbWdfaWR9XVxuXHRcdFx0XHRkYXRhLmNhbmNlbF9yZWFzb24gPSB0aGlzLnByb3BzLmNhbmNlbF9yZWFzb25cblx0ICAgICAgICBcdHRoaXMucHJvcHMuY2FuY2VsSW5zdXJhbmNlKGRhdGEsKHJlc3ApPT4geyAvLyB0byBzdWJtaXQgdXNlciBjYW5jZWxsYXRpb24gcmVxdWVzdFxuXHRcdFx0XHRcdGlmIChyZXNwLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuY2xlYXJCYW5rRGV0YWlscygpIC8vIHRvIHJlc2V0IHVzZXIgZW50ZXJ0ZWQgYmFuayBkZXRhaWxzXG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcG9saWN5X251bWJlcjpyZXNwLnBvbGljeV9udW1iZXIsc2hvd0NhbmNlbFNlY3Rpb246ZmFsc2UgfSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdCAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRW50ZXJQcmVzcyhlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwaWNrRmlsZShlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdICYmIGUudGFyZ2V0LmZpbGVzWzBdLm5hbWUuaW5jbHVkZXMoJy5wZGYnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoQ3JvcChudWxsLCBmaWxlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wcmVzcyA9IG5ldyBDb21wcmVzcygpXG4gICAgICAgICAgICAgICAgY29tcHJlc3MuY29tcHJlc3MoW2ZpbGVdLCB7XG4gICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcxID0gcmVzdWx0c1swXVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlNjRzdHIgPSBpbWcxLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nRXh0ID0gaW1nMS5leHRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IENvbXByZXNzLmNvbnZlcnRCYXNlNjRUb0ZpbGUoYmFzZTY0c3RyLCBpbWdFeHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QmFzZTY0KGZpbGUsIChkYXRhVXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaENyb3AoZGF0YVVybCxudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFVcmwgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTbmFja0Jhci5zaG93KHsgcG9zOiAnYm90dG9tLWNlbnRlcicsIHRleHQ6IFwiRXJyb3IgdXBsb2FkaW5nIGltYWdlLlwiIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCYXNlNjQoZmlsZSwgY2IpIHtcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNiKHJlYWRlci5yZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2hDcm9wKGRhdGFVcmwsIG1lbWJlcl9pZCwgZmlsZSkge1xuICAgICAgICBsZXQgZmlsZV9ibG9iX2RhdGFcbiAgICAgICAgaWYgKGRhdGFVcmwpIHtcbiAgICAgICAgICAgIGZpbGVfYmxvYl9kYXRhID0gdGhpcy5kYXRhVVJJdG9CbG9iKGRhdGFVcmwpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lbV9kYXRhID0ge31cbiAgICAgICAgbGV0IGV4aXN0aW5nRGF0YVxuICAgICAgICBsZXQgaW1nX3RhZyA9IFwiZG9jdW1lbnRfaW1hZ2VcIlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRhdGFVcmw6IG51bGwsaXNMb2FkaW5nOnRydWVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoaW1nX3RhZywgZmlsZSwgXCJpbWFnZUZpbGVuYW1lLnBkZlwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGltZ190YWcsIGZpbGVfYmxvYl9kYXRhLCBcImltYWdlRmlsZW5hbWUuanBlZ1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGxvYWRCYW5rUHJvb2YoZm9ybV9kYXRhLCdpbWFnZScsIChkYXRhLCBlcnIpID0+IHsgLy8gdG8gdXBsb2FkIHByb29mc1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLnNldFN0YXRlKHtpbWdfdXJsOmRhdGEuZGF0YS5kb2N1bWVudF9pbWFnZSxpbWdfaWQ6ZGF0YS5pZCxpc0xvYWRpbmc6ZmFsc2V9LCgpPT57XG4gICAgICAgICAgICAgICAgXHRcdHRoaXMucHJvcHMuc2F2ZVVzZXJCYW5rRGV0YWlscyh0aGlzLnN0YXRlKSAvLyB0byBzYXZlIHVzZXIgZW50ZXJlZCBiYW5rIGRldGFpbHMgaW4gc3RvcmVcbiAgICAgICAgICAgICAgICBcdH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkYXRhVVJJdG9CbG9iKGRhdGFVUkkpIHtcbiAgICAgICAgdmFyIGJpbmFyeSA9IGF0b2IoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKGJpbmFyeS5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGFycmF5KV0sIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH0pO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVJbWFnZShpbWcpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWdfdXJsOm51bGwsaW1nX2lkOm51bGx9LCgpPT57XG4gICAgICAgIFx0dGhpcy5wcm9wcy5zYXZlVXNlckJhbmtEZXRhaWxzKHRoaXMuc3RhdGUpIC8vIHRvIHNhdmUgdXNlciBlbnRlcmVkIGJhbmsgZGV0YWlscyBpbiBzdG9yZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCgpe1xuICAgIFx0dGhpcy5wcm9wcy5zYXZlVXNlckJhbmtEZXRhaWxzKHRoaXMuc3RhdGUpIC8vIHRvIHNhdmUgdXNlciBlbnRlcmVkIGJhbmsgZGV0YWlscyBpbiBzdG9yZVxuICAgIH1cbiAgICBcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogODAgfX0gPlxuXHRcdFx0PFByb2ZpbGVIZWFkZXIgc2hvd1BhY2thZ2VTdHJpcD17dHJ1ZX0vPlxuXHRcdFx0e3RoaXMuc3RhdGUuc2hvd0NhbmNlbFNlY3Rpb24/XG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYXJlbnQtc2VjdGlvbiBib29rLWFwcG9pbnRtZW50LXNlY3Rpb24gY29udGFpbmVyLXRvcC1tYXJnaW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03XCI+XG5cdFx0XHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2ZpbGUtYm9vay1zY3JlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaW5zLWNhbmNsLWhlYWRpbmdcIj5XZSBuZWVkIGJhbmsgYWNjb3VudCBkZXRhaWxzIHRvIHByb2NlZWQgd2l0aCB5b3VyIGNhbmNlbGxhdGlvbjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5zLWNhbmNsLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImdvLWJvdHRvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiQWNjbmFtZVwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gcmVxdWlyZWQgcmVmPVwibmFtZVwiIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlRW50ZXJQcmVzcy5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9IHN0eWxlPXt7J3RleHRUcmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZSd9fSBhdXRvQ29tcGxldGU9XCJmaXJzdF9uYW1lXCIvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkFjY25hbWVcIj5BY2NvdW50IEhvbGRlciBOYW1lPC9sYWJlbD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImJhbmtOYW1lXCIgbmFtZT1cImJhbmtOYW1lXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuYmFua05hbWV9IHJlcXVpcmVkIHJlZj1cImJhbmtOYW1lXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319IGF1dG9Db21wbGV0ZT1cImJhbmtOYW1lXCIvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJhbmtOYW1lXCI+QmFuayBOYW1lPC9sYWJlbD5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxXcmFwXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8aW5wdXQgaWQ9XCJhZGRyZXNzXCIgbmFtZT1cImFkZHJlc3NcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzfSByZXF1aXJlZCByZWY9XCJhZGRyZXNzXCIgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVFbnRlclByZXNzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gc3R5bGU9e3sndGV4dFRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJ319IGF1dG9Db21wbGV0ZT1cImFkZHJlc3NcIi8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkJhbmsgYWRkcmVzczwvbGFiZWw+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsV3JhcFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhY2NvdW50TnVtYmVyXCIgbmFtZT1cImFjY291bnROdW1iZXJcIiB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmFjY291bnROdW1iZXJ9IHJlcXVpcmVkIHJlZj1cImFjY291bnROdW1iZXJcIiBvbktleVByZXNzPXt0aGlzLmhhbmRsZUVudGVyUHJlc3MuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gYXV0b0NvbXBsZXRlPVwiYWNjb3VudE51bWJlclwiLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhY2NvdW50TnVtYmVyXCI+QWNjb3VudCBOdW1iZXI8L2xhYmVsPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbFdyYXBcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaWZzY0NvZGVcIiBuYW1lPVwiaWZzY0NvZGVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0SGFuZGxlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5pZnNjQ29kZX0gcmVxdWlyZWQgcmVmPVwiaWZzY0NvZGVcIiBvbktleVByZXNzPXt0aGlzLmhhbmRsZUVudGVyUHJlc3MuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBzdHlsZT17eyd0ZXh0VHJhbnNmb3JtJzogJ2NhcGl0YWxpemUnfX0gYXV0b0NvbXBsZXRlPVwiaWZzY0NvZGVcIi8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWZzY0NvZGVcIj5JRlNDIENvZGU8L2xhYmVsPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmlzTG9hZGluZz9cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnMtcHJmLWltZy1ncmQgZC1ibG9ja1wiPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItZm9yLWNoYXQtZGl2IG10LTBcIj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyLWZvci1jaGF0IG1iLTAnPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICA6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmltZ191cmwgJiYgdGhpcy5zdGF0ZS5pbWdfaWQ/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJiYW5rLXByZlwiPkJhbmsgQWNjb3VudCBQcm9vZjwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucy11cGxkLWRvYy1pbWdcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW5zLXVwLWltZy1pYyBkb2MtaW5zLWltZ1wiIHNyYz17dGhpcy5zdGF0ZS5pbWdfdXJsfSAvPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucy1pbWctY2xzLWJ0blwiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSW1hZ2UuYmluZCh0aGlzLHRoaXMuc3RhdGUuaW1nX3VybCl9IHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvY2hhdGNsb3NlLnN2Zyd9IC8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDo8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1jYW5jbC1wYXJhXCI+UGxlYXNlIHVwbG9hZCBlaXRoZXIgb2YgdGhlc2UgZG9jdW1lbnRzIHRvIHZlcmlmeSB5b3VyIGFjY291bnQgZGV0YWlscy4gPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbnMtY24tYnRuXCIgc3R5bGU9e3sgY3Vyc29yOidwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nKS5jbGljaygpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nKS52YWx1ZSA9IFwiXCIgfX0+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy91cGxkLnBuZyd9Lz5VcGxvYWQgQ2FuY2VsbGVkIENoZXF1ZVxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLGN1cnNvcjoncG9pbnRlcicgfX0gaWQ9e2BpbWFnZUZpbGVQaWNrZXJfYH0gb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzKX0gYWNjZXB0PVwiaW1hZ2UvKlwiLz5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlucy1jYW5jbC1wYXJhXCI+T1I8L3A+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnMtY24tYnRuXCIgc3R5bGU9e3sgY3Vyc29yOidwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nKS5jbGljaygpXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZVBpY2tlcl8nKS52YWx1ZSA9IFwiXCIgfX0+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICBcdDxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyBcIi9pbWcvdXBsZC5wbmdcIn0vPlVwbG9hZCBBY2NvdW50IFN0YXRlbWVudFxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLGN1cnNvcjoncG9pbnRlcicgfX0gaWQ9e2BpbWFnZUZpbGVQaWNrZXJfYH0gb25DaGFuZ2U9e3RoaXMucGlja0ZpbGUuYmluZCh0aGlzKX0gYWNjZXB0PVwiaW1hZ2UvKlwiLz5cblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qPHAgY2xhc3NOYW1lPVwiaW5zLWNhbmNsLXBhcmFcIj5XZSBuZWVkIHRvIGNvbmZpcm0gaWYgdGhpcyBhY2NvdW50IGJlbG9uZ3MgdG8geW91LiBQbGVhc2UgZmlsbCBtb3JlIGRldGFpbHMgYmVsb3cgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImlucy1jbi1idG5cIj48aW1nIHNyYz17QVNTRVRTX0JBU0VfVVJMICsgJy9pbWcvdXBsZC5wbmcnfSAvPlVwbG9hZCBDYW5jZWxsZWQgQ2hlcXVlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlucy1jYW5jbC1wYXJhXCI+T1I8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiaW5zLWNuLWJ0blwiPjxpbWcgc3JjPXtBU1NFVFNfQkFTRV9VUkwgKyAnL2ltZy91cGxkLnBuZyd9IC8+VXBsb2FkIEFjY291bnQgU3RhdGVtZW50PC9idXR0b24+Ki99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInYtYnRuIHYtYnRuLXByaW1hcnkgYnRuLWxnIGZpeGVkIGhvcml6b250YWwgYm90dG9tIG5vLXJvdW5kIGJ0bi1sZyB0ZXh0LWxnIHN0YXRpYy1idG5cIiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX0+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxDaGF0UGFuZWwgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0OlxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uIGNvbnRhaW5lci10b3AtbWFyZ2luXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWFpbi1yb3cgcGFyZW50LXNlY3Rpb24tcm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctN1wiPlxuXHRcdFx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9maWxlLWJvb2stc2NyZWVuXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRZb3VyIFBvbGljeSB7dGhpcy5zdGF0ZS5wb2xpY3lfbnVtYmVyfSBjYW5jZWxsYXRpb24gcmVxdWVzdCBoYXMgYmVlbiBpbml0aWF0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBtcmItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXJiLTEwXCI+T3VyIHRlYW0gd2lsbCBnZXQgaW4gdG91Y2ggd2l0aCB5b3Ugc2hvcnRseTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+IEFuIGVtYWlsIGFuZCBzbXMgaGFzIGJlZW4gc2VudCB0byB5b3VyIHJlZ2lzdGVyZWQgZW1haWwgaWQgYW5kIG1vYmlsZSBudW1iZXIgcmVnYXJkaW5nIHRoZSBzYW1lIDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IG1yYi0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD4gRm9yIGFueSBvdGhlciBxdWVyeSB5b3UgY29udGFjdCB1cyBhdCA8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZ3LTUwMFwiPjE4MDAtMTIzLTk0MTkgPC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDBcIj4gY3VzdG9tZXJjYXJlQGRvY3ByaW1lLmNvbTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdXJhbmNlQ2FuY2VsbGF0aW9uVmlldyAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBjYW5jZWxJbnN1cmFuY2UsIGNhbmNlbGxlZEluc3VyYW5jZURldGFpbHMsIHNhdmVVc2VyQmFua0RldGFpbHMsIHVwbG9hZEJhbmtQcm9vZixjbGVhckJhbmtEZXRhaWxzfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IEluc3VyYW5jZUJhbmtEZXRhaWxzVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luc3VyYW5jZS9pbnN1cmFuY2VCYW5rRGV0YWlsc1ZpZXcuanMnXG5cbmNsYXNzIEluc3VyYW5jZUJhbmtEZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOm51bGxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PEluc3VyYW5jZUJhbmtEZXRhaWxzVmlldyB7Li4udGhpcy5wcm9wc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfS8+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgVVNFUiA9IHN0YXRlLlVTRVJcbiAgICBsZXQgeyBpbnN1cmVyX2JhbmtfZGV0YWlscywgY2FuY2VsX3JlYXNvbn0gPSBzdGF0ZS5JTlNVUkFOQ0VcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN1cmVyX2JhbmtfZGV0YWlscyxcbiAgICAgICAgY2FuY2VsX3JlYXNvblxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgICBjYW5jZWxJbnN1cmFuY2UgOihkYXRhLGNiKSA9PiBkaXNwYXRjaChjYW5jZWxJbnN1cmFuY2UoZGF0YSxjYikpLFxuICAgICAgICBzYXZlVXNlckJhbmtEZXRhaWxzOihjcml0ZXJpYSkgPT4gZGlzcGF0Y2goc2F2ZVVzZXJCYW5rRGV0YWlscyhjcml0ZXJpYSkpLFxuICAgICAgICB1cGxvYWRCYW5rUHJvb2Y6KGZpbGUsaW1nVHlwZSxjYikgPT5kaXNwYXRjaCh1cGxvYWRCYW5rUHJvb2YoZmlsZSxpbWdUeXBlLGNiKSksXG4gICAgICAgIGNsZWFyQmFua0RldGFpbHM6KCkgPT4gZGlzcGF0Y2goY2xlYXJCYW5rRGV0YWlscygpKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzICwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnN1cmFuY2VCYW5rRGV0YWlscykiXSwic291cmNlUm9vdCI6IiJ9