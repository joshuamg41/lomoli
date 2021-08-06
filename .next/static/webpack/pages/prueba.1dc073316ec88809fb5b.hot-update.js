self["webpackHotUpdate_N_E"]("pages/prueba",{

/***/ "./pages/prueba.js":
/*!*************************!*\
  !*** ./pages/prueba.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\joshua\\OneDrive\\Documentos\\WorkDev\\MoM\\lomoli\\pages\\prueba.js",
    _this = undefined;

var prueba = function prueba() {
  var onSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var res;
      return C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log((0,C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, e.target.name, 0));
              _context.next = 4;
              return fetch('http://localhost:4000/api/reservas/createreservas', {
                body: JSON.stringify((0,C_Users_joshua_OneDrive_Documentos_WorkDev_MoM_lomoli_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, e.target.name, e.target.value)),
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              });

            case 4:
              res = _context.sent;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      id: "name",
      type: "text",
      name: "name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      children: "inviar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (prueba);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJ1ZWJhLmpzIl0sIm5hbWVzIjpbInBydWViYSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm5hbWUiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidmFsdWUiLCJoZWFkZXJzIiwibWV0aG9kIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixNQUFNQyxRQUFRO0FBQUEsNlRBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLDBKQUFlSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsSUFBeEIsRUFBOEIsQ0FBOUI7QUFGYTtBQUFBLHFCQUtFQyxLQUFLLENBQ3RCLG1EQURzQixFQUV0QjtBQUNFQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsMEpBQ0hULENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxJQUROLEVBQ2NMLENBQUMsQ0FBQ0ksTUFBRixDQUFTTSxLQUR2QixFQURSO0FBSUVDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFKWDtBQU9FQyxzQkFBTSxFQUFFO0FBUFYsZUFGc0IsQ0FMUDs7QUFBQTtBQUtWQyxpQkFMVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSZCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBbUJBLHNCQUNJO0FBQU0sWUFBUSxFQUFHQSxRQUFqQjtBQUFBLDRCQUVJO0FBQU8sUUFBRSxFQUFDLE1BQVY7QUFBaUIsVUFBSSxFQUFDLE1BQXRCO0FBQTZCLFVBQUksRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBU0gsQ0E3QkQ7O0FBK0JBLCtEQUFlRCxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BydWViYS4xZGMwNzMzMTZlYzg4ODA5ZmI1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBwcnVlYmEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgW2UudGFyZ2V0Lm5hbWVdOjB9KTtcclxuICAgICAgICBcclxuXHJcbiAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3Jlc2VydmFzL2NyZWF0ZXJlc2VydmFzJyxcclxuICAgICAge1xyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIFtlLnRhcmdldC5uYW1lXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhvblN1Ym1pdCl9PlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIi8+XHJcbiAgICAgICAgICA8YnV0dG9uPmludmlhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcnVlYmE7Il0sInNvdXJjZVJvb3QiOiIifQ==