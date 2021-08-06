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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\joshua\\OneDrive\\Documentos\\WorkDev\\MoM\\lomoli\\pages\\prueba.js",
    _this = undefined,
    _s = $RefreshSig$();



var prueba = function prueba() {
  _s();

  // Definimos los estados
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(String),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      count = _useState2[0],
      setCount = _useState2[1]; // Los estados definidos se pueden usar dentro de otras funciones


  function obtenerName() {
    console.log(name);
  } // Funciona como un componentDidMount y componentDidUpdate al mismo tiempo.
  // Es decir, se ejecutara inmediatamente cargado el sitio sin la necesidad de un boton
  // Y se ira actualizando al mismo tiempo que vaya cambiando su valor


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    document.title = "Sus clicks ".concat(count);
    console.log("El numero es: ".concat(count));
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "main",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Ingresa algo: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        onChange: function onChange(e) {
          return setName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 28
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Ingresaste: ", name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: obtenerName,
      children: "Obtener Nombre en consola"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        return setCount(!count);
      },
      children: "Click Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }, _this), "Sus clicks ", count]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }, _this);
};

_s(prueba, "GJl2RqnpRDmHf6Q6IhPCUdQxcw8=");

/* harmony default export */ __webpack_exports__["default"] = (prueba);
/*export default () => {
    // Definimos los estados
    const [name, setName] = useState(String)
    const [count, setCount] = useState(Number)

    // Los estados definidos se pueden usar dentro de otras funciones
    function obtenerName(){
        console.log(name)
    }

    // Funciona como un componentDidMount y componentDidUpdate al mismo tiempo.
    // Es decir, se ejecutara inmediatamente cargado el sitio sin la necesidad de un boton
    // Y se ira actualizando al mismo tiempo que vaya cambiando su valor
    useEffect(() => {
        document.title = `Sus clicks ${count}`
        console.log(`El numero es: ${count}`)
    })*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJ1ZWJhLmpzIl0sIm5hbWVzIjpbInBydWViYSIsInVzZVN0YXRlIiwiU3RyaW5nIiwibmFtZSIsInNldE5hbWUiLCJjb3VudCIsInNldENvdW50Iiwib2J0ZW5lck5hbWUiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNoQjtBQURnQixrQkFFUUMsK0NBQVEsQ0FBQ0MsTUFBRCxDQUZoQjtBQUFBLE1BRVRDLElBRlM7QUFBQSxNQUVIQyxPQUZHOztBQUFBLG1CQUdVSCwrQ0FBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdUSSxLQUhTO0FBQUEsTUFHRkMsUUFIRSxrQkFLaEI7OztBQUNBLFdBQVNDLFdBQVQsR0FBc0I7QUFDbEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0FBQ0gsR0FSZSxDQVVoQjtBQUNBO0FBQ0E7OztBQUNBTyxrREFBUyxDQUFDLFlBQU07QUFDWkMsWUFBUSxDQUFDQyxLQUFULHdCQUErQlAsS0FBL0I7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLHlCQUE2QkosS0FBN0I7QUFDSCxHQUhRLENBQVQ7QUFNQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0k7QUFBQSxnREFBaUI7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFLGtCQUFBUSxDQUFDO0FBQUEsaUJBQUlULE9BQU8sQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLGlDQUFnQlosSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFRLGFBQU8sRUFBRUksV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQUtJO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUQsUUFBUSxDQUFDLENBQUNELEtBQUYsQ0FBZDtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosaUJBT2dCQSxLQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVdKLENBOUJEOztHQUFNTCxNOztBQWdDTiwrREFBZUEsTUFBZjtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJ1ZWJhLjBmYjdjYzUxNjBkYjViMGYwYzE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHBydWViYSA9ICgpID0+IHtcclxuICAgICAvLyBEZWZpbmltb3MgbG9zIGVzdGFkb3NcclxuICAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShTdHJpbmcpXHJcbiAgICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuIFxyXG4gICAgIC8vIExvcyBlc3RhZG9zIGRlZmluaWRvcyBzZSBwdWVkZW4gdXNhciBkZW50cm8gZGUgb3RyYXMgZnVuY2lvbmVzXHJcbiAgICAgZnVuY3Rpb24gb2J0ZW5lck5hbWUoKXtcclxuICAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgICB9XHJcbiBcclxuICAgICAvLyBGdW5jaW9uYSBjb21vIHVuIGNvbXBvbmVudERpZE1vdW50IHkgY29tcG9uZW50RGlkVXBkYXRlIGFsIG1pc21vIHRpZW1wby5cclxuICAgICAvLyBFcyBkZWNpciwgc2UgZWplY3V0YXJhIGlubWVkaWF0YW1lbnRlIGNhcmdhZG8gZWwgc2l0aW8gc2luIGxhIG5lY2VzaWRhZCBkZSB1biBib3RvblxyXG4gICAgIC8vIFkgc2UgaXJhIGFjdHVhbGl6YW5kbyBhbCBtaXNtbyB0aWVtcG8gcXVlIHZheWEgY2FtYmlhbmRvIHN1IHZhbG9yXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgU3VzIGNsaWNrcyAke2NvdW50fWBcclxuICAgICAgICAgY29uc29sZS5sb2coYEVsIG51bWVybyBlczogJHtjb3VudH1gKVxyXG4gICAgIH0pXHJcbiBcclxuXHJcbiAgICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgIDxwPkluZ3Jlc2EgYWxnbzogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+PC9wPlxyXG4gICAgICAgICAgPHA+SW5ncmVzYXN0ZToge25hbWV9PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvYnRlbmVyTmFtZX0+T2J0ZW5lciBOb21icmUgZW4gY29uc29sYTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoIWNvdW50KSB9PkNsaWNrIE1lPC9idXR0b24+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgU3VzIGNsaWNrcyB7Y291bnR9XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJ1ZWJhO1xyXG5cclxuXHJcblxyXG4vKmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIC8vIERlZmluaW1vcyBsb3MgZXN0YWRvc1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoU3RyaW5nKVxyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShOdW1iZXIpXHJcblxyXG4gICAgLy8gTG9zIGVzdGFkb3MgZGVmaW5pZG9zIHNlIHB1ZWRlbiB1c2FyIGRlbnRybyBkZSBvdHJhcyBmdW5jaW9uZXNcclxuICAgIGZ1bmN0aW9uIG9idGVuZXJOYW1lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jaW9uYSBjb21vIHVuIGNvbXBvbmVudERpZE1vdW50IHkgY29tcG9uZW50RGlkVXBkYXRlIGFsIG1pc21vIHRpZW1wby5cclxuICAgIC8vIEVzIGRlY2lyLCBzZSBlamVjdXRhcmEgaW5tZWRpYXRhbWVudGUgY2FyZ2FkbyBlbCBzaXRpbyBzaW4gbGEgbmVjZXNpZGFkIGRlIHVuIGJvdG9uXHJcbiAgICAvLyBZIHNlIGlyYSBhY3R1YWxpemFuZG8gYWwgbWlzbW8gdGllbXBvIHF1ZSB2YXlhIGNhbWJpYW5kbyBzdSB2YWxvclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGBTdXMgY2xpY2tzICR7Y291bnR9YFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFbCBudW1lcm8gZXM6ICR7Y291bnR9YClcclxuICAgIH0pKi9cclxuXHJcbiAgICJdLCJzb3VyY2VSb290IjoiIn0=