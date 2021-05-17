(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-infopage_jsx"],{

/***/ "./Resources/public/js/components/c4g-infopage.jsx":
/*!*********************************************************!*\
  !*** ./Resources/public/js/components/c4g-infopage.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
});

var Infopage = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Infopage, _Component);

  var _super = _createSuper(Infopage);

  function Infopage(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Infopage);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this); // create control to toggle the panel

    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = _this.langConstants.CTRL_INFOAREA;
    element.className = "c4g-infopage-control ol-unselectable ol-control ";

    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }

    if (props.external) {
      element.className += " c4g-external";
    }

    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    var mapController = props.mapController;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    mapController.mapsControls.controls.infoPage = control;
    mapController.map.addControl(control);
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      open: props.open || false,
      control: control
    };
    return _this;
  }

  (0, _createClass2["default"])(Infopage, [{
    key: "render",
    value: function render() {
      if (this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close");
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-infopage-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-infopage-header",
        headerClass: "c4g-infopage-headline",
        header: this.langConstants.INFOPAGE,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-infopage-content",
        dangerouslySetInnerHTML: {
          __html: this.props.infoContent
        }
      }));
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }]);
  return Infopage;
}(_react.Component);

exports.default = Infopage;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1pbmZvcGFnZS5qc3giXSwibmFtZXMiOlsiVGl0bGViYXIiLCJSZWFjdCIsImxhenkiLCJJbmZvcGFnZSIsInByb3BzIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwibGFuZ0NvbnN0YW50cyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwidGl0bGUiLCJDVFJMX0lORk9BUkVBIiwiY2xhc3NOYW1lIiwib3BlbiIsImV4dGVybmFsIiwiYXBwZW5kQ2hpbGQiLCJqUXVlcnkiLCJvbiIsImV2ZW50Iiwic3RhdGUiLCJjbG9zZSIsImNvbnRyb2wiLCJDb250cm9sIiwidGFyZ2V0IiwibWFwc0NvbnRyb2xzIiwiY29udHJvbHMiLCJpbmZvUGFnZSIsIm1hcCIsImFkZENvbnRyb2wiLCJiaW5kIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIklORk9QQUdFIiwiQ0xPU0UiLCJfX2h0bWwiLCJpbmZvQ29udGVudCIsInNldFN0YXRlIiwic2V0T3BlbkNvbXBvbmVudCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiY2FjaGluZyIsInBhbmVsVmFsIiwidXRpbHMiLCJnZXRWYWx1ZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInN0b3JlVmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFIQSxJQUFNQSxRQUFRLGdCQUFHQyxrQkFBTUMsSUFBTixDQUFXO0FBQUEsU0FBTSxtS0FBTjtBQUFBLENBQVgsQ0FBakI7O0lBS3FCQyxROzs7OztBQUVuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsUUFBTUMsS0FBSyxpREFBWCxDQUhpQixDQUlqQjs7QUFDQSxRQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsOEJBQVlOLEtBQUssQ0FBQ08sYUFBTixDQUFvQkMsSUFBaEMsQ0FBckI7QUFDQUgsVUFBTSxDQUFDSSxLQUFQLEdBQWUsTUFBS0gsYUFBTCxDQUFtQkksYUFBbEM7QUFDQVIsV0FBTyxDQUFDUyxTQUFSLEdBQW9CLGtEQUFwQjs7QUFDQSxRQUFJWCxLQUFLLENBQUNZLElBQVYsRUFBZ0I7QUFDZFYsYUFBTyxDQUFDUyxTQUFSLElBQXFCLFVBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xULGFBQU8sQ0FBQ1MsU0FBUixJQUFxQixXQUFyQjtBQUNEOztBQUNELFFBQUlYLEtBQUssQ0FBQ2EsUUFBVixFQUFvQjtBQUNsQlgsYUFBTyxDQUFDUyxTQUFSLElBQXFCLGVBQXJCO0FBQ0Q7O0FBQ0RULFdBQU8sQ0FBQ1ksV0FBUixDQUFvQlQsTUFBcEI7QUFDQVUsVUFBTSxDQUFDYixPQUFELENBQU4sQ0FBZ0JjLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQVVDLEtBQVYsRUFBaUI7QUFDM0MsVUFBSWhCLEtBQUssQ0FBQ2lCLEtBQU4sQ0FBWU4sSUFBaEIsRUFBc0I7QUFDcEJYLGFBQUssQ0FBQ2tCLEtBQU47QUFDRCxPQUZELE1BRU87QUFDTGxCLGFBQUssQ0FBQ1csSUFBTjtBQUNEO0FBQ0YsS0FORDtBQU9BLFFBQUlMLGFBQWEsR0FBR1AsS0FBSyxDQUFDTyxhQUExQjtBQUNBLFFBQUlhLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFZO0FBQUNuQixhQUFPLEVBQUVBLE9BQVY7QUFBbUJvQixZQUFNLEVBQUV0QixLQUFLLENBQUNzQjtBQUFqQyxLQUFaLENBQWQ7QUFDQWYsaUJBQWEsQ0FBQ2dCLFlBQWQsQ0FBMkJDLFFBQTNCLENBQW9DQyxRQUFwQyxHQUErQ0wsT0FBL0M7QUFDQWIsaUJBQWEsQ0FBQ21CLEdBQWQsQ0FBa0JDLFVBQWxCLENBQTZCUCxPQUE3QjtBQUNBLFVBQUtELEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdTLElBQVgsZ0RBQWI7QUFDQSxVQUFLaEIsSUFBTCxHQUFZLE1BQUtBLElBQUwsQ0FBVWdCLElBQVYsZ0RBQVo7QUFDQSxVQUFLVixLQUFMLEdBQWE7QUFDWE4sVUFBSSxFQUFFWixLQUFLLENBQUNZLElBQU4sSUFBYyxLQURUO0FBRVhRLGFBQU8sRUFBRUE7QUFGRSxLQUFiO0FBaENpQjtBQW9DbEI7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQUksS0FBS0YsS0FBTCxDQUFXTixJQUFmLEVBQXFCO0FBQ25CRyxjQUFNLENBQUMsS0FBS0csS0FBTCxDQUFXRSxPQUFYLENBQW1CbEIsT0FBcEIsQ0FBTixDQUFtQzJCLFFBQW5DLENBQTRDLFVBQTVDLEVBQXdEQyxXQUF4RCxDQUFvRSxXQUFwRTtBQUNBZixjQUFNLENBQUMseUJBQUQsQ0FBTixDQUFrQ2MsUUFBbEMsQ0FBMkMsVUFBM0MsRUFBdURDLFdBQXZELENBQW1FLFdBQW5FO0FBQ0QsT0FIRCxNQUdPO0FBQ0xmLGNBQU0sQ0FBQyxLQUFLRyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJsQixPQUFwQixDQUFOLENBQW1DNEIsV0FBbkMsQ0FBK0MsVUFBL0MsRUFBMkRELFFBQTNELENBQW9FLFdBQXBFO0FBQ0FkLGNBQU0sQ0FBQyx5QkFBRCxDQUFOLENBQWtDZSxXQUFsQyxDQUE4QyxVQUE5QyxFQUEwREQsUUFBMUQsQ0FBbUUsV0FBbkU7QUFDRDs7QUFFRCwwQkFDRTtBQUFLLGlCQUFTLEVBQUU7QUFBaEIsc0JBQ0UsZ0NBQUMsZUFBRDtBQUFVLGdCQUFRLGVBQUU7QUFBcEIsc0JBQ0UsZ0NBQUMsUUFBRDtBQUFVLG9CQUFZLEVBQUUscUJBQXhCO0FBQStDLG1CQUFXLEVBQUUsdUJBQTVEO0FBQ1UsY0FBTSxFQUFFLEtBQUt2QixhQUFMLENBQW1CeUIsUUFEckM7QUFDK0MscUJBQWEsRUFBRSxvQkFEOUQ7QUFDb0Ysa0JBQVUsRUFBRSxLQUFLWixLQURyRztBQUM0RyxxQkFBYSxFQUFFLEtBQUtiLGFBQUwsQ0FBbUIwQjtBQUQ5SSxRQURGLENBREYsZUFNRTtBQUFLLGlCQUFTLEVBQUUsc0JBQWhCO0FBQXdDLCtCQUF1QixFQUFFO0FBQUNDLGdCQUFNLEVBQUUsS0FBS2pDLEtBQUwsQ0FBV2tDO0FBQXBCO0FBQWpFLFFBTkYsQ0FERjtBQVdEOzs7V0FFRCxnQkFBTztBQUNMLFdBQUtDLFFBQUwsQ0FBYztBQUFDdkIsWUFBSSxFQUFFO0FBQVAsT0FBZDtBQUNBLFdBQUtaLEtBQUwsQ0FBV08sYUFBWCxDQUF5QjZCLGdCQUF6QixDQUEwQyxJQUExQztBQUNEOzs7V0FFRCxpQkFBUTtBQUNOLFdBQUtELFFBQUwsQ0FBYztBQUFDdkIsWUFBSSxFQUFFO0FBQVAsT0FBZDtBQUNEOzs7V0FFRCw0QkFBbUJ5QixTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUNDLFFBQXpDLEVBQW1EO0FBQ2pELFVBQUksS0FBS3ZDLEtBQUwsQ0FBV08sYUFBWCxDQUF5QkMsSUFBekIsQ0FBOEJnQyxPQUE5QixJQUF5QyxDQUFDLEtBQUt0QixLQUFMLENBQVdOLElBQXpELEVBQStEO0FBQzdELFlBQUk2QixRQUFRLEdBQUdDLG9CQUFNQyxRQUFOLENBQWUsT0FBZixDQUFmOztBQUNBLFlBQUlGLFFBQVEsS0FBSyxLQUFLRyxXQUFMLENBQWlCQyxJQUFsQyxFQUF3QztBQUN0Q0gsOEJBQU1JLFVBQU4sQ0FBaUIsT0FBakIsRUFBMEIsRUFBMUI7QUFDRDtBQUNGO0FBQ0Y7OztFQTlFbUNDLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctaW5mb3BhZ2VfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFN1c3BlbnNlfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFRpdGxlYmFyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2M0Zy10aXRsZWJhci5qc3hcIikpO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvcGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgLy8gY3JlYXRlIGNvbnRyb2wgdG8gdG9nZ2xlIHRoZSBwYW5lbFxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLm1hcENvbnRyb2xsZXIuZGF0YSk7XG4gICAgYnV0dG9uLnRpdGxlID0gdGhpcy5sYW5nQ29uc3RhbnRzLkNUUkxfSU5GT0FSRUE7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1pbmZvcGFnZS1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBzY29wZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLmluZm9QYWdlID0gY29udHJvbDtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKGNvbnRyb2wpO1xuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4gfHwgZmFsc2UsXG4gICAgICBjb250cm9sOiBjb250cm9sXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctaW5mb3BhZ2UtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctaW5mb3BhZ2UtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctaW5mb3BhZ2Utd3JhcHBlclwifT5cbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgIDxUaXRsZWJhciB3cmFwcGVyQ2xhc3M9e1wiYzRnLWluZm9wYWdlLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctaW5mb3BhZ2UtaGVhZGxpbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuSU5GT1BBR0V9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWluZm9wYWdlLWNvbnRlbnRcIn0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRoaXMucHJvcHMuaW5mb0NvbnRlbnR9fT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLnNldE9wZW5Db21wb25lbnQodGhpcyk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5jYWNoaW5nICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGxldCBwYW5lbFZhbCA9IHV0aWxzLmdldFZhbHVlKCdwYW5lbCcpO1xuICAgICAgaWYgKHBhbmVsVmFsID09PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSgncGFuZWwnLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=