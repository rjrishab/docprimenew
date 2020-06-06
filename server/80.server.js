exports.ids = [80];
exports.modules = {

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _HelmetTags = __webpack_require__(/*! ../HelmetTags */ "./dev/js/components/commons/HelmetTags/index.js");

var _HelmetTags2 = _interopRequireDefault(_HelmetTags);

var _config = __webpack_require__(/*! ../../../config */ "./dev/js/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const queryString = __webpack_require__(/*! query-string */ "query-string");


class SpecialitiesCitiesMap extends _react2.default.Component {

	constructor(props) {
		super(props);

		let page = 1;
		const parsed = queryString.parse(this.props.location.search);
		if (parsed) {
			page = parsed.page || 1;
		}

		var title = this.props.match.url.toLowerCase();
		title = title.substring(1, title.length);

		this.state = {
			page: parseInt(page),
			title: title
		};
	}
	componentDidMount() {
		if (window) {
			window.scrollTo(0, 0);
		}
		if (this.props.location.search == '?page=1') {
			var newHref = window.location.href.replace('?page=1', '');
			window.location.href = newHref;
		}
		let speciality = this.props.match.params.speciality;
		this.props.getSpecialitiesMap(speciality, this.state.page);
	}

	goToSpeciality(url, e) {
		this.props.history.push(`/${url}`);
	}

	render() {

		let totalPages = this.props.specialitiesMapCities ? parseInt(this.props.specialitiesMapCities.pages) : 0;
		let pageCount = [];
		let prev = '',
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
						{ key: i, className: 'anch-page-cnt', href: `/${this.state.title}?page=${i}` },
						i
					));
				}
			} else if (this.state.page != 1 && this.state.page + 1 <= totalPages) {
				next = this.state.page + 1;
				prev = this.state.page - 1;
				pageCount.push(_react2.default.createElement(
					'a',
					{ key: 1, className: 'anch-page-cnt', href: `/${this.state.title}?page=${this.state.page - 1}` },
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
						{ key: i, className: 'anch-page-cnt', href: `/${this.state.title}?page=${i}` },
						i
					));
				}
			} else if (this.state.page == totalPages && totalPages > 1) {
				prev = this.state.page - 1;
				pageCount.push(_react2.default.createElement(
					'a',
					{ key: 1, className: 'anch-page-cnt', href: `/${this.state.title}?page=${this.state.page - 1}` },
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

						canonicalUrl: `${_config2.default.API_BASE_URL}${this.props.location.pathname}${this.props.location.search}`,

						prev: `${prev ? `${_config2.default.API_BASE_URL}${this.props.location.pathname}${prev != 1 ? `?page=${prev}` : ''}` : ''}`,

						next: `${next ? `${_config2.default.API_BASE_URL}${this.props.location.pathname}?page=${next}` : ''}`
					} }),
				this.props.specialitiesMapCities.paginated_specialists.map((city, i) => {
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
							city.speciality_url_title.map((speciality, i) => {
								return _react2.default.createElement(
									'div',
									{ key: i, className: 'col-md-6 tests-brdr-btm', onClick: this.goToSpeciality.bind(this, speciality.url) },
									_react2.default.createElement(
										'div',
										{ className: 'anchor-data-style' },
										_react2.default.createElement(
											'a',
											{ href: `/${speciality.url}`, onClick: e => {
													e.preventDefault();
												} },
											`${speciality.title}`
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
}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SpecialitiesMap extends _react2.default.Component {

	constructor(props) {
		super(props);
		this.state = { showMore: false };
	}

	componentDidMount() {
		this.props.getSpecialitiesMap();
	}

	render() {

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
				this.props.specialitiesMap.specialization_inventory && this.props.specialitiesMap.specialization_inventory.length ? this.props.specialitiesMap.specialization_inventory.map((city, i) => {
					let style = {};
					if (!this.state.showMore && i >= 20) {
						style = { display: 'none' };
					}
					return _react2.default.createElement(
						"div",
						{ style: style, key: i, className: "col-12 col-md-6 col-lg-4 tests-brdr-btm", onClick: () => this.props.history.push(`/speciality-inventory/${city.specialization_id}`) },
						_react2.default.createElement(
							"div",
							{ className: "anchor-data-style" },
							_react2.default.createElement(
								"a",
								{ href: `/speciality-inventory/${city.specialization_id}`, onClick: e => e.preventDefault() },
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
						{ className: "sitemap-show-more", onClick: () => {
								this.setState({ showMore: true });
							} },
						"Show More"
					)
				) : ''
			)
		);
	}
}

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

var _react = __webpack_require__(/*! react */ "react");

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

class CitiesRoutes extends _react2.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (window) {
            window.scrollTo(0, 0);
        }
    }

    render() {

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

}

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

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _SpecializationMapRoutes = __webpack_require__(/*! ../../components/commons/SpecializationMapRoutes */ "./dev/js/components/commons/SpecializationMapRoutes/index.js");

var _SpecializationMapRoutes2 = _interopRequireDefault(_SpecializationMapRoutes);

var _index = __webpack_require__(/*! ../../actions/index.js */ "./dev/js/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SpecializationMap extends _react2.default.Component {

	static loadData(store, match, query) {
		if (match.params.speciality) {
			return store.dispatch((0, _index.getSpecialitiesMap)(match.params.speciality, query.page));
		} else {
			return store.dispatch((0, _index.getSpecialitiesMap)());
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.setFetchResults(true);
		}, 1000);
	}

	render() {

		return _react2.default.createElement(_SpecializationMapRoutes2.default, this.props);
	}
}

SpecializationMap.contextTypes = {
	router: () => null
};
const mapStateToProps = state => {
	const {
		specialitiesMap,
		specialitiesMapCities
	} = state.SITE_MAP;

	return {
		specialitiesMap,
		specialitiesMapCities
	};
};

const mapDispatchToProps = dispatch => {

	return {
		getSpecialitiesMap: (speciality, page, cb) => dispatch((0, _index.getSpecialitiesMap)(speciality, page, cb)),
		setFetchResults: status => dispatch((0, _index.setFetchResults)(status))
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SpecializationMap);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvY29tcG9uZW50cy9jb21tb25zL1NwZWNpYWxpemF0aW9uTWFwUm91dGVzL1NwZWNpYWxpdGllc0NpdGllc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9TcGVjaWFsaXphdGlvbk1hcFJvdXRlcy9TcGVjaWFsaXRpZXNWaWV3LmpzIiwid2VicGFjazovLy8uL2Rldi9qcy9jb21wb25lbnRzL2NvbW1vbnMvU3BlY2lhbGl6YXRpb25NYXBSb3V0ZXMvU3BlY2lhbGl6YXRpb25NYXBSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2NvbXBvbmVudHMvY29tbW9ucy9TcGVjaWFsaXphdGlvbk1hcFJvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvanMvY29udGFpbmVycy9jb21tb25zL1NwZWNpYWxpemF0aW9uU2l0ZU1hcC5qcyJdLCJuYW1lcyI6WyJxdWVyeVN0cmluZyIsInJlcXVpcmUiLCJTcGVjaWFsaXRpZXNDaXRpZXNNYXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwYWdlIiwicGFyc2VkIiwicGFyc2UiLCJsb2NhdGlvbiIsInNlYXJjaCIsInRpdGxlIiwibWF0Y2giLCJ1cmwiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsImxlbmd0aCIsInN0YXRlIiwicGFyc2VJbnQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsInNjcm9sbFRvIiwibmV3SHJlZiIsImhyZWYiLCJyZXBsYWNlIiwic3BlY2lhbGl0eSIsInBhcmFtcyIsImdldFNwZWNpYWxpdGllc01hcCIsImdvVG9TcGVjaWFsaXR5IiwiZSIsImhpc3RvcnkiLCJwdXNoIiwicmVuZGVyIiwidG90YWxQYWdlcyIsInNwZWNpYWxpdGllc01hcENpdGllcyIsInBhZ2VzIiwicGFnZUNvdW50IiwicHJldiIsIm5leHQiLCJpIiwicGFnaW5hdGVkX3NwZWNpYWxpc3RzIiwiY2Fub25pY2FsVXJsIiwiQ09ORklHIiwiQVBJX0JBU0VfVVJMIiwicGF0aG5hbWUiLCJtYXAiLCJjaXR5IiwibWFyZ2luQm90dG9tIiwiY2l0eV90aXRsZSIsInNwZWNpYWxpdHlfdXJsX3RpdGxlIiwiYmluZCIsInByZXZlbnREZWZhdWx0IiwiQVNTRVRTX0JBU0VfVVJMIiwiU3BlY2lhbGl0aWVzTWFwIiwic2hvd01vcmUiLCJzcGVjaWFsaXRpZXNNYXAiLCJzcGVjaWFsaXphdGlvbl9pbnZlbnRvcnkiLCJzdHlsZSIsImRpc3BsYXkiLCJzcGVjaWFsaXphdGlvbl9pZCIsInNwZWNpYWxpemF0aW9uIiwic2V0U3RhdGUiLCJDaXRpZXNSb3V0ZXMiLCJTcGVjaWFsaXphdGlvbk1hcFJvdXRlcyIsIlNwZWNpYWxpemF0aW9uTWFwIiwibG9hZERhdGEiLCJzdG9yZSIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJzZXRUaW1lb3V0Iiwic2V0RmV0Y2hSZXN1bHRzIiwiY29udGV4dFR5cGVzIiwicm91dGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiU0lURV9NQVAiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjYiIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUZBLE1BQU1BLGNBQWNDLG1CQUFPQSxDQUFDLGtDQUFSLENBQXBCOzs7QUFLQSxNQUFNQyxxQkFBTixTQUFvQ0MsZ0JBQU1DLFNBQTFDLENBQW9EOztBQUVuREMsYUFBWUMsS0FBWixFQUFtQjtBQUNsQixRQUFNQSxLQUFOOztBQUVBLE1BQUlDLE9BQU8sQ0FBWDtBQUNBLFFBQU1DLFNBQVNSLFlBQVlTLEtBQVosQ0FBa0IsS0FBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CQyxNQUF0QyxDQUFmO0FBQ0EsTUFBSUgsTUFBSixFQUFZO0FBQ1hELFVBQU9DLE9BQU9ELElBQVAsSUFBZSxDQUF0QjtBQUNBOztBQUVELE1BQUlLLFFBQVEsS0FBS04sS0FBTCxDQUFXTyxLQUFY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bmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9IZWxtZXRUYWdzJ1xuaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cblxuY2xhc3MgU3BlY2lhbGl0aWVzQ2l0aWVzTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0bGV0IHBhZ2UgPSAxO1xuXHRcdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKVxuXHRcdGlmIChwYXJzZWQpIHtcblx0XHRcdHBhZ2UgPSBwYXJzZWQucGFnZSB8fCAxXG5cdFx0fVxuXG5cdFx0dmFyIHRpdGxlID0gdGhpcy5wcm9wcy5tYXRjaC51cmwudG9Mb3dlckNhc2UoKTtcblx0XHR0aXRsZSA9IHRpdGxlLnN1YnN0cmluZygxLCB0aXRsZS5sZW5ndGgpXG5cblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwYWdlOiBwYXJzZUludChwYWdlKSxcblx0XHRcdHRpdGxlOiB0aXRsZVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAod2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2ggPT0gJz9wYWdlPTEnKSB7XG5cdFx0XHR2YXIgbmV3SHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoJz9wYWdlPTEnLCAnJyk7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld0hyZWY7XG5cdFx0fVxuXHRcdGxldCBzcGVjaWFsaXR5ID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3BlY2lhbGl0eVxuXHRcdHRoaXMucHJvcHMuZ2V0U3BlY2lhbGl0aWVzTWFwKHNwZWNpYWxpdHksIHRoaXMuc3RhdGUucGFnZSlcblx0fVxuXG5cdGdvVG9TcGVjaWFsaXR5KHVybCwgZSkge1xuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt1cmx9YClcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdGxldCB0b3RhbFBhZ2VzID0gdGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXBDaXRpZXMgPyBwYXJzZUludCh0aGlzLnByb3BzLnNwZWNpYWxpdGllc01hcENpdGllcy5wYWdlcykgOiAwXG5cdFx0bGV0IHBhZ2VDb3VudCA9IFtdXG5cdFx0bGV0IHByZXYgPSAnJywgbmV4dCA9ICcnXG5cdFx0aWYgKHRvdGFsUGFnZXMpIHtcblx0XHRcdGlmICh0aGlzLnN0YXRlLnBhZ2UgPT0gMSAmJiB0aGlzLnN0YXRlLnBhZ2UgPCB0b3RhbFBhZ2VzKSB7XG5cdFx0XHRcdG5leHQgPSB0aGlzLnN0YXRlLnBhZ2UgKyAxXG5cdFx0XHRcdHBhZ2VDb3VudC5wdXNoKDxzcGFuIGtleT17MX0gY2xhc3NOYW1lPVwiYW5jaC1wYWdlLWNudCBhY3RpdmVcIj57dGhpcy5zdGF0ZS5wYWdlfTwvc3Bhbj5cblx0XHRcdFx0KVxuXHRcdFx0XHRmb3IodmFyIGkgPTI7IGk8PXRvdGFsUGFnZXM7IGkrKyl7XG5cdFx0XHRcdFx0cGFnZUNvdW50LnB1c2goPGEga2V5PXtpfSBjbGFzc05hbWU9XCJhbmNoLXBhZ2UtY250XCIgaHJlZj17YC8ke3RoaXMuc3RhdGUudGl0bGV9P3BhZ2U9JHtpfWB9ID57aX08L2E+KVxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5wYWdlICE9IDEgJiYgdGhpcy5zdGF0ZS5wYWdlICsgMSA8PSB0b3RhbFBhZ2VzKSB7XG5cdFx0XHRcdG5leHQgPSB0aGlzLnN0YXRlLnBhZ2UgKyAxXG5cdFx0XHRcdHByZXYgPSB0aGlzLnN0YXRlLnBhZ2UgLSAxXG5cdFx0XHRcdHBhZ2VDb3VudC5wdXNoKFxuXHRcdFx0XHRcdFx0PGEga2V5PXsxfSBjbGFzc05hbWU9XCJhbmNoLXBhZ2UtY250XCIgaHJlZj17YC8ke3RoaXMuc3RhdGUudGl0bGV9P3BhZ2U9JHt0aGlzLnN0YXRlLnBhZ2UgLSAxfWB9ID57dGhpcy5zdGF0ZS5wYWdlIC0gMX08L2E+KVxuXG5cdFx0XHRcdHBhZ2VDb3VudC5wdXNoKDxzcGFuIGtleT17dGhpcy5zdGF0ZS5wYWdlfSBjbGFzc05hbWU9XCJhbmNoLXBhZ2UtY250XCIgPnt0aGlzLnN0YXRlLnBhZ2V9PC9zcGFuPilcblxuXHRcdFx0XHRmb3IodmFyIGkgPSB0aGlzLnN0YXRlLnBhZ2UgKyAxOyBpPD10b3RhbFBhZ2VzOyBpKyspe1xuXHRcdFx0XHRcdHBhZ2VDb3VudC5wdXNoKDxhIGtleT17aX0gY2xhc3NOYW1lPVwiYW5jaC1wYWdlLWNudFwiIGhyZWY9e2AvJHt0aGlzLnN0YXRlLnRpdGxlfT9wYWdlPSR7aX1gfSA+e2l9PC9hPilcblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUucGFnZSA9PSB0b3RhbFBhZ2VzICYmIHRvdGFsUGFnZXMgPiAxKSB7XG5cdFx0XHRcdHByZXYgPSB0aGlzLnN0YXRlLnBhZ2UgLSAxXG5cdFx0XHRcdHBhZ2VDb3VudC5wdXNoKFxuXHRcdFx0XHRcdFx0PGEga2V5PXsxfSBjbGFzc05hbWU9XCJhbmNoLXBhZ2UtY250XCIgaHJlZj17YC8ke3RoaXMuc3RhdGUudGl0bGV9P3BhZ2U9JHt0aGlzLnN0YXRlLnBhZ2UgLSAxfWB9ID57dGhpcy5zdGF0ZS5wYWdlIC0gMX08L2E+KVxuXG5cdFx0XHRcdHBhZ2VDb3VudC5wdXNoKDxzcGFuIGtleT17dGhpcy5zdGF0ZS5wYWdlfSBjbGFzc05hbWU9XCJhbmNoLXBhZ2UtY250XCIgPnt0aGlzLnN0YXRlLnBhZ2V9PC9zcGFuPilcblx0XHRcdFx0XHRcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHNpdGVtYXAtcm93XCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLnNwZWNpYWxpdGllc01hcENpdGllcy5wYWdpbmF0ZWRfc3BlY2lhbGlzdHMgJiYgdGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXBDaXRpZXMucGFnaW5hdGVkX3NwZWNpYWxpc3RzLmxlbmd0aCA/XG5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PEhlbG1ldFRhZ3MgdGFnc0RhdGE9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2Fub25pY2FsVXJsOiBgJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0ke3RoaXMucHJvcHMubG9jYXRpb24uc2VhcmNofWAsXG5cblx0XHRcdFx0XHRcdFx0XHRcdHByZXY6IGAke3ByZXY/YCR7Q09ORklHLkFQSV9CQVNFX1VSTH0ke3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9JHtwcmV2ICE9IDE/YD9wYWdlPSR7cHJldn1gOicnfWA6Jyd9YCxcblxuXHRcdFx0XHRcdFx0XHRcdFx0bmV4dDogYCR7bmV4dD9gJHtDT05GSUcuQVBJX0JBU0VfVVJMfSR7dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX0/cGFnZT0ke25leHR9YDonJ31gXG5cdFx0XHRcdFx0XHRcdFx0fX0gLz5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnNwZWNpYWxpdGllc01hcENpdGllcy5wYWdpbmF0ZWRfc3BlY2lhbGlzdHMubWFwKChjaXR5LCBpKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxNXB4J319IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTJcIiBrZXk9e2l9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmdy01MDAgc2l0ZW1hcC10aXRsZVwiPntjaXR5LmNpdHlfdGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2l0eS5zcGVjaWFsaXR5X3VybF90aXRsZS5tYXAoKHNwZWNpYWxpdHksIGkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY29sLW1kLTYgdGVzdHMtYnJkci1idG1cIiBvbkNsaWNrPXt0aGlzLmdvVG9TcGVjaWFsaXR5LmJpbmQodGhpcywgc3BlY2lhbGl0eS51cmwpfSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFuY2hvci1kYXRhLXN0eWxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2AvJHtzcGVjaWFsaXR5LnVybH1gfSBvbkNsaWNrPXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCkgfX0gPntgJHtzcGVjaWFsaXR5LnRpdGxlfWB9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzaXRlbWFwLXJpZ2h0LWFycm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHR9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1zdHlsZVwiPlxuXHRcdFx0XHR7cGFnZUNvdW50fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVjaWFsaXRpZXNDaXRpZXNNYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuY2xhc3MgU3BlY2lhbGl0aWVzTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7IHNob3dNb3JlOiBmYWxzZSB9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLmdldFNwZWNpYWxpdGllc01hcCgpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmdy01MDAgc2l0ZW1hcC10aXRsZVwiPkFsbCBTcGVjaWFsaXRpZXM8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgc2l0ZW1hcC1yb3dcIj5cblxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMucHJvcHMuc3BlY2lhbGl0aWVzTWFwLnNwZWNpYWxpemF0aW9uX2ludmVudG9yeSAmJiB0aGlzLnByb3BzLnNwZWNpYWxpdGllc01hcC5zcGVjaWFsaXphdGlvbl9pbnZlbnRvcnkubGVuZ3RoID9cblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXAuc3BlY2lhbGl6YXRpb25faW52ZW50b3J5Lm1hcCgoY2l0eSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGxldCBzdHlsZSA9IHt9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLnNob3dNb3JlICYmIGkgPj0gMjApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlID0geyBkaXNwbGF5OiAnbm9uZScgfVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9IGtleT17aX0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IHRlc3RzLWJyZHItYnRtXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9zcGVjaWFsaXR5LWludmVudG9yeS8ke2NpdHkuc3BlY2lhbGl6YXRpb25faWR9YCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbmNob3ItZGF0YS1zdHlsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgL3NwZWNpYWxpdHktaW52ZW50b3J5LyR7Y2l0eS5zcGVjaWFsaXphdGlvbl9pZH1gfSBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSA+e2NpdHkuc3BlY2lhbGl6YXRpb259PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzaXRlbWFwLXJpZ2h0LWFycm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0FTU0VUU19CQVNFX1VSTCArIFwiL2ltZy9jdXN0b21lci1pY29ucy9hcnJvdy1mb3J3YXJkLXJpZ2h0LnN2Z1wifSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0OiA8cD5ObyBEYXRhIEZvdW5kPC9wPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQhdGhpcy5zdGF0ZS5zaG93TW9yZSAmJiB0aGlzLnByb3BzLnNwZWNpYWxpdGllc01hcC5zcGVjaWFsaXphdGlvbl9pbnZlbnRvcnkgJiYgdGhpcy5wcm9wcy5zcGVjaWFsaXRpZXNNYXAuc3BlY2lhbGl6YXRpb25faW52ZW50b3J5Lmxlbmd0aCA+PSAyMCA/XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIG1ydC0yMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwic2l0ZW1hcC1zaG93LW1vcmVcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93TW9yZTogdHJ1ZSB9KSB9fT5TaG93IE1vcmU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlY2lhbGl0aWVzTWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSAnLi4vRGVza3RvcFByb2ZpbGVIZWFkZXInXG5pbXBvcnQgTGVmdEJhciBmcm9tICcuLi9MZWZ0QmFyJ1xuaW1wb3J0IFNwZWNpYWxpdGllc1ZpZXcgZnJvbSAnLi9TcGVjaWFsaXRpZXNWaWV3J1xuaW1wb3J0IFNwZWNpYWxpdGllc0NpdGllc1ZpZXcgZnJvbSAnLi9TcGVjaWFsaXRpZXNDaXRpZXNWaWV3J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Ib21lL2Zvb3RlcidcblxuXG5jbGFzcyBDaXRpZXNSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5LXdyYXAgc2l0ZW1hcC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgZHAtY29udGFpbmVyLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYWluLXJvdyBwYXJlbnQtc2VjdGlvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0QmFyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zcGVjaWFsaXR5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVjaWFsaXRpZXNDaXRpZXNWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8U3BlY2lhbGl0aWVzVmlldyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2l0aWVzUm91dGVzICAiLCJpbXBvcnQgU3BlY2lhbGl6YXRpb25NYXBSb3V0ZXMgZnJvbSAnLi9TcGVjaWFsaXphdGlvbk1hcFJvdXRlcydcblxuZXhwb3J0IGRlZmF1bHQgU3BlY2lhbGl6YXRpb25NYXBSb3V0ZXMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgU3BlY2lhbGl6YXRpb25NYXBSb3V0ZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb25zL1NwZWNpYWxpemF0aW9uTWFwUm91dGVzJ1xuaW1wb3J0IHsgc2V0RmV0Y2hSZXN1bHRzLCBnZXRTcGVjaWFsaXRpZXNNYXAgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2luZGV4LmpzJ1xuXG5jbGFzcyBTcGVjaWFsaXphdGlvbk1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGxvYWREYXRhKHN0b3JlLCBtYXRjaCwgcXVlcnkpIHtcblx0XHRpZiAobWF0Y2gucGFyYW1zLnNwZWNpYWxpdHkpIHtcblx0XHRcdHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXRTcGVjaWFsaXRpZXNNYXAobWF0Y2gucGFyYW1zLnNwZWNpYWxpdHksIHF1ZXJ5LnBhZ2UpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0U3BlY2lhbGl0aWVzTWFwKCkpXG5cdFx0fVxuXG5cdH1cblxuXHRzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuXHRcdHJvdXRlcjogKCkgPT4gbnVsbFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLnNldEZldGNoUmVzdWx0cyh0cnVlKVxuXHRcdH0sIDEwMDApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFNwZWNpYWxpemF0aW9uTWFwUm91dGVzIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblx0Y29uc3Qge1xuXHRcdHNwZWNpYWxpdGllc01hcCxcblx0XHRzcGVjaWFsaXRpZXNNYXBDaXRpZXNcblx0fSA9IHN0YXRlLlNJVEVfTUFQXG5cblx0cmV0dXJuIHtcblx0XHRzcGVjaWFsaXRpZXNNYXAsXG5cdFx0c3BlY2lhbGl0aWVzTWFwQ2l0aWVzXG5cdH1cbn1cblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblxuXHRyZXR1cm4ge1xuXHRcdGdldFNwZWNpYWxpdGllc01hcDogKHNwZWNpYWxpdHksIHBhZ2UsIGNiKSA9PiBkaXNwYXRjaChnZXRTcGVjaWFsaXRpZXNNYXAoc3BlY2lhbGl0eSwgcGFnZSwgY2IpKSxcblx0XHRzZXRGZXRjaFJlc3VsdHM6IChzdGF0dXMpID0+IGRpc3BhdGNoKHNldEZldGNoUmVzdWx0cyhzdGF0dXMpKVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU3BlY2lhbGl6YXRpb25NYXApIl0sInNvdXJjZVJvb3QiOiIifQ==