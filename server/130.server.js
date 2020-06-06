exports.ids = [130];
exports.modules = {

/***/ "./dev/js/containers/ipd/IpdDetail.js":
/*!********************************************!*\
  !*** ./dev/js/containers/ipd/IpdDetail.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _LeftBar = __webpack_require__(/*! ../../components/commons/LeftBar */ "./dev/js/components/commons/LeftBar/index.js");

var _LeftBar2 = _interopRequireDefault(_LeftBar);

var _RightBar = __webpack_require__(/*! ../../components/commons/RightBar */ "./dev/js/components/commons/RightBar/index.js");

var _RightBar2 = _interopRequireDefault(_RightBar);

var _DesktopProfileHeader = __webpack_require__(/*! ../../components/commons/DesktopProfileHeader */ "./dev/js/components/commons/DesktopProfileHeader/index.js");

var _DesktopProfileHeader2 = _interopRequireDefault(_DesktopProfileHeader);

var _footer = __webpack_require__(/*! ../../components/commons/Home/footer */ "./dev/js/components/commons/Home/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");

class IpdDetailView extends _react2.default.Component {

	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0);
		}
		if (this.props.match.params.ipd_id) {
			this.props.getIpdInfo(this.props.match.params.ipd_id, this.props.selectedLocation);
		}
	}

	render() {

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
						this.props.IPD_INFO_LOADED ? _react2.default.createElement(
							'div',
							{ className: 'ipd-section' },
							_react2.default.createElement(
								'h4',
								{ className: 'section-heading' },
								_react2.default.createElement('img', { src: 'https://cdn.docprime.com/cp/assets/img/icons/back-arrow.png', className: 'img-fluid', style: { width: '20px', marginRight: '10px', verticalAlign: '-3px' }, onClick: () => this.props.history.go(-1) }),
								` About ${this.props.ipd_info.about.name}`
							),
							_react2.default.createElement('div', { className: 'widget custom-li-style', dangerouslySetInnerHTML: { __html: this.props.ipd_info.about.details } })
						) : ''
					),
					_react2.default.createElement(_RightBar2.default, { msgTemplate: 'gold_general_template' })
				)
			),
			_react2.default.createElement(_footer2.default, null)
		);
	}
}

const mapStateToProps = state => {

	const {
		selectedLocation
	} = state.SEARCH_CRITERIA_OPD;

	const {
		selectedCriterias,
		ipd_info,
		IPD_INFO_LOADED,
		commonSelectedCriterias
	} = state.SEARCH_CRITERIA_IPD;

	return {
		selectedLocation, selectedCriterias, ipd_info, IPD_INFO_LOADED, commonSelectedCriterias
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getIpdInfo: (ipd_id, selectedLocation) => dispatch((0, _index.getIpdInfo)(ipd_id, selectedLocation))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IpdDetailView);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9pcGQvSXBkRGV0YWlsLmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIklwZERldGFpbFZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJwcm9wcyIsIm1hdGNoIiwicGFyYW1zIiwiaXBkX2lkIiwiZ2V0SXBkSW5mbyIsInNlbGVjdGVkTG9jYXRpb24iLCJyZW5kZXIiLCJJUERfSU5GT19MT0FERUQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwidmVydGljYWxBbGlnbiIsImhpc3RvcnkiLCJnbyIsImlwZF9pbmZvIiwiYWJvdXQiLCJuYW1lIiwiX19odG1sIiwiZGV0YWlscyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiU0VBUkNIX0NSSVRFUklBX09QRCIsInNlbGVjdGVkQ3JpdGVyaWFzIiwiY29tbW9uU2VsZWN0ZWRDcml0ZXJpYXMiLCJTRUFSQ0hfQ1JJVEVSSUFfSVBEIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0EsTUFBTUEsY0FBY0MsbUJBQU9BLENBQUMsa0NBQVIsQ0FBcEI7O0FBRUEsTUFBTUMsYUFBTixTQUE0QkMsZ0JBQU1DLFNBQWxDLENBQTRDOztBQUUzQ0MscUJBQW1CO0FBQ2xCLE1BQUdDLE1BQUgsRUFBVTtBQUNUQSxVQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQWtCLENBQWxCO0FBQ0E7QUFDRCxNQUFHLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLE1BQTNCLEVBQWtDO0FBQ2pDLFFBQUtILEtBQUwsQ0FBV0ksVUFBWCxDQUFzQixLQUFLSixLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCQyxNQUE5QyxFQUFzRCxLQUFLSCxLQUFMLENBQVdLLGdCQUFqRTtBQUNBO0FBQ0Q7O0FBRURDLFVBQVE7O0FBRVAsU0FDQztBQUFBO0FBQUEsS0FBSyxXQUFVLG1CQUFmO0FBQ2EsaUNBQUMsOEJBQUQsSUFBZSxZQUFZLElBQTNCLEdBRGI7QUFFYTtBQUFBO0FBQUEsTUFBUyxXQUFVLG1FQUFuQjtBQUVDO0FBQUE7QUFBQSxPQUFLLFdBQVUsaUNBQWY7QUFDSSxtQ0FBQyxpQkFBRCxPQURKO0FBRUk7QUFBQTtBQUFBLFFBQUssV0FBVSx3Q0FBZjtBQUVFLFdBQUtOLEtBQUwsQ0FBV08sZUFBWCxHQUNBO0FBQUE7QUFBQSxTQUFLLFdBQVcsYUFBaEI7QUFDZDtBQUFBO0FBQUEsVUFBSSxXQUFVLGlCQUFkO0FBQWdDLCtDQUFLLEtBQUksNkRBQVQsRUFBdUUsV0FBVSxXQUFqRixFQUE2RixPQUFPLEVBQUVDLE9BQU8sTUFBVCxFQUFnQkMsYUFBYSxNQUE3QixFQUFxQ0MsZUFBZSxNQUFwRCxFQUFwRyxFQUFrSyxTQUFTLE1BQUksS0FBS1YsS0FBTCxDQUFXVyxPQUFYLENBQW1CQyxFQUFuQixDQUFzQixDQUFDLENBQXZCLENBQS9LLEdBQWhDO0FBQTZPLGtCQUFTLEtBQUtaLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQkMsS0FBcEIsQ0FBMEJDLElBQUs7QUFBclIsUUFEYztBQUVDLDhDQUFLLFdBQVUsd0JBQWYsRUFBd0MseUJBQXlCLEVBQUVDLFFBQVEsS0FBS2hCLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQkMsS0FBcEIsQ0FBMEJHLE9BQXBDLEVBQWpFO0FBRkQsT0FEQSxHQUtDO0FBUEgsTUFGSjtBQWFJLG1DQUFDLGtCQUFELElBQVUsYUFBWSx1QkFBdEI7QUFiSjtBQUZELElBRmI7QUFxQlUsaUNBQUMsZ0JBQUQ7QUFyQlYsR0FERDtBQTBCQTtBQXZDMEM7O0FBMEM1QyxNQUFNQyxrQkFBbUJDLEtBQUQsSUFBVzs7QUFFbEMsT0FBTTtBQUNDZDtBQURELEtBRUNjLE1BQU1DLG1CQUZiOztBQUlBLE9BQU07QUFDTEMsbUJBREs7QUFFTFIsVUFGSztBQUdMTixpQkFISztBQUlMZTtBQUpLLEtBS0ZILE1BQU1JLG1CQUxWOztBQU9HLFFBQU07QUFDTGxCLGtCQURLLEVBQ2FnQixpQkFEYixFQUNnQ1IsUUFEaEMsRUFDMENOLGVBRDFDLEVBQzJEZTtBQUQzRCxFQUFOO0FBR0gsQ0FoQkQ7O0FBa0JBLE1BQU1FLHFCQUFzQkMsUUFBRCxJQUFjO0FBQ3hDLFFBQU87QUFDTnJCLGNBQVksQ0FBQ0QsTUFBRCxFQUFTRSxnQkFBVCxLQUE4Qm9CLFNBQVMsdUJBQVd0QixNQUFYLEVBQW1CRSxnQkFBbkIsQ0FBVDtBQURwQyxFQUFQO0FBR0EsQ0FKRDs7a0JBTWUseUJBQVFhLGVBQVIsRUFBeUJNLGtCQUF6QixFQUE2QzlCLGFBQTdDLEMiLCJmaWxlIjoiMTMwLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMZWZ0QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9MZWZ0QmFyJ1xuaW1wb3J0IFJpZ2h0QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9SaWdodEJhcidcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9ucy9EZXNrdG9wUHJvZmlsZUhlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL0hvbWUvZm9vdGVyJ1xuaW1wb3J0IHsgZ2V0SXBkSW5mbyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaW5kZXguanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpXG5cbmNsYXNzIElwZERldGFpbFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0aWYod2luZG93KXtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApXG5cdFx0fVxuXHRcdGlmKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlwZF9pZCl7XG5cdFx0XHR0aGlzLnByb3BzLmdldElwZEluZm8odGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaXBkX2lkLCB0aGlzLnByb3BzLnNlbGVjdGVkTG9jYXRpb24pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keS13cmFwXCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgc2hvd1NlYXJjaD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFyZW50LXNlY3Rpb24gYm9vay1hcHBvaW50bWVudC1zZWN0aW9uIGJyZWFkY3J1bWItbXJnblwiPlxuXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cblx0ICAgICAgICAgICAgICAgICAgICA8TGVmdEJhciAvPlxuICAgICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC03IGNvbC1sZy03IGNlbnRlci1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgXHRcdHtcbiAgICAgICAgICAgICAgICAgICAgXHRcdFx0dGhpcy5wcm9wcy5JUERfSU5GT19MT0FERUQ/XG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lID1cImlwZC1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+PGltZyBzcmM9XCJodHRwczovL2Nkbi5kb2NwcmltZS5jb20vY3AvYXNzZXRzL2ltZy9pY29ucy9iYWNrLWFycm93LnBuZ1wiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsbWFyZ2luUmlnaHQ6ICcxMHB4JywgdmVydGljYWxBbGlnbjogJy0zcHgnIH19IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhpc3RvcnkuZ28oLTEpfS8+e2AgQWJvdXQgJHt0aGlzLnByb3BzLmlwZF9pbmZvLmFib3V0Lm5hbWV9YH08L2g0PlxuICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0IGN1c3RvbS1saS1zdHlsZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5pcGRfaW5mby5hYm91dC5kZXRhaWxzfX0+PC9kaXY+XG5cdFx0ICAgICAgICAgICAgICAgICAgICBcdDwvZGl2PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgXHQ6JydcdFxuICAgICAgICAgICAgICAgICAgICBcdFx0fVxuXHQgICAgICAgICAgICAgICAgICAgIFx0XG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPFJpZ2h0QmFyIG1zZ1RlbXBsYXRlPVwiZ29sZF9nZW5lcmFsX3RlbXBsYXRlXCIvPlxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0ICAgICAgICAgICAgPC9zZWN0aW9uPlxuXHQgICAgICAgICAgICA8Rm9vdGVyLz5cblx0ICAgICAgICA8L2Rpdj5cblxuXHRcdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG5cdGNvbnN0IHtcbiAgICAgICAgc2VsZWN0ZWRMb2NhdGlvblxuICAgIH0gPSBzdGF0ZS5TRUFSQ0hfQ1JJVEVSSUFfT1BEXG5cblx0Y29uc3Qge1xuXHRcdHNlbGVjdGVkQ3JpdGVyaWFzLFxuXHRcdGlwZF9pbmZvLFxuXHRcdElQRF9JTkZPX0xPQURFRCxcblx0XHRjb21tb25TZWxlY3RlZENyaXRlcmlhc1xuXHR9ID0gc3RhdGUuU0VBUkNIX0NSSVRFUklBX0lQRFxuXG4gICAgcmV0dXJue1xuICAgIFx0c2VsZWN0ZWRMb2NhdGlvbiwgc2VsZWN0ZWRDcml0ZXJpYXMsIGlwZF9pbmZvLCBJUERfSU5GT19MT0FERUQsIGNvbW1vblNlbGVjdGVkQ3JpdGVyaWFzXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRnZXRJcGRJbmZvOiAoaXBkX2lkLCBzZWxlY3RlZExvY2F0aW9uKSA9PiBkaXNwYXRjaChnZXRJcGRJbmZvKGlwZF9pZCwgc2VsZWN0ZWRMb2NhdGlvbikpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSXBkRGV0YWlsVmlldykiXSwic291cmNlUm9vdCI6IiJ9