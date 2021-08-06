(function() {
var exports = {};
exports.id = "pages/prueba";
exports.ids = ["pages/prueba"];
exports.modules = {

/***/ "./pages/prueba.js":
/*!*************************!*\
  !*** ./pages/prueba.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\joshua\\OneDrive\\Documentos\\WorkDev\\MoM\\lomoli\\pages\\prueba.js";


const prueba = () => {
  // Definimos los estados
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(String);
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Los estados definidos se pueden usar dentro de otras funciones

  function obtenerName() {
    console.log(name);
  } // Funciona como un componentDidMount y componentDidUpdate al mismo tiempo.
  // Es decir, se ejecutara inmediatamente cargado el sitio sin la necesidad de un boton
  // Y se ira actualizando al mismo tiempo que vaya cambiando su valor


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.title = `Sus clicks ${count}`;
    console.log(`El numero es: ${count}`);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "main",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Ingresa algo: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        onChange: e => setName(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 28
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Ingresaste: ", name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: obtenerName,
      children: "Obtener Nombre en consola"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => setCount(!count),
      children: "Click Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }, undefined), "Sus clicks ", count]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }, undefined);
};

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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/prueba.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb21vbGkvLi9wYWdlcy9wcnVlYmEuanMiLCJ3ZWJwYWNrOi8vbG9tb2xpL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sb21vbGkvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJwcnVlYmEiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwiU3RyaW5nIiwiY291bnQiLCJzZXRDb3VudCIsIm9idGVuZXJOYW1lIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwidGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDaEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUNDLE1BQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JILCtDQUFRLENBQUMsS0FBRCxDQUFsQyxDQUhnQixDQUtoQjs7QUFDQSxXQUFTSSxXQUFULEdBQXNCO0FBQ2xCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUNILEdBUmUsQ0FVaEI7QUFDQTtBQUNBOzs7QUFDQVMsa0RBQVMsQ0FBQyxNQUFNO0FBQ1pDLFlBQVEsQ0FBQ0MsS0FBVCxHQUFrQixjQUFhUCxLQUFNLEVBQXJDO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLGlCQUFnQkosS0FBTSxFQUFuQztBQUNILEdBSFEsQ0FBVDtBQU1BLHNCQUNDO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDSTtBQUFBLGdEQUFpQjtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUVRLENBQUMsSUFBSVgsT0FBTyxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLGlDQUFnQmQsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBUSxhQUFPLEVBQUVNLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQVEsYUFBTyxFQUFFLE1BQU1ELFFBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixpQkFPZ0JBLEtBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBV0osQ0E5QkQ7O0FBZ0NBLCtEQUFlTCxNQUFmO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxROzs7Ozs7Ozs7OztBQ3REQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wcnVlYmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHBydWViYSA9ICgpID0+IHtcclxuICAgICAvLyBEZWZpbmltb3MgbG9zIGVzdGFkb3NcclxuICAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShTdHJpbmcpXHJcbiAgICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuIFxyXG4gICAgIC8vIExvcyBlc3RhZG9zIGRlZmluaWRvcyBzZSBwdWVkZW4gdXNhciBkZW50cm8gZGUgb3RyYXMgZnVuY2lvbmVzXHJcbiAgICAgZnVuY3Rpb24gb2J0ZW5lck5hbWUoKXtcclxuICAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgICB9XHJcbiBcclxuICAgICAvLyBGdW5jaW9uYSBjb21vIHVuIGNvbXBvbmVudERpZE1vdW50IHkgY29tcG9uZW50RGlkVXBkYXRlIGFsIG1pc21vIHRpZW1wby5cclxuICAgICAvLyBFcyBkZWNpciwgc2UgZWplY3V0YXJhIGlubWVkaWF0YW1lbnRlIGNhcmdhZG8gZWwgc2l0aW8gc2luIGxhIG5lY2VzaWRhZCBkZSB1biBib3RvblxyXG4gICAgIC8vIFkgc2UgaXJhIGFjdHVhbGl6YW5kbyBhbCBtaXNtbyB0aWVtcG8gcXVlIHZheWEgY2FtYmlhbmRvIHN1IHZhbG9yXHJcbiAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgU3VzIGNsaWNrcyAke2NvdW50fWBcclxuICAgICAgICAgY29uc29sZS5sb2coYEVsIG51bWVybyBlczogJHtjb3VudH1gKVxyXG4gICAgIH0pXHJcbiBcclxuXHJcbiAgICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgIDxwPkluZ3Jlc2EgYWxnbzogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+PC9wPlxyXG4gICAgICAgICAgPHA+SW5ncmVzYXN0ZToge25hbWV9PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvYnRlbmVyTmFtZX0+T2J0ZW5lciBOb21icmUgZW4gY29uc29sYTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoIWNvdW50KSB9PkNsaWNrIE1lPC9idXR0b24+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgU3VzIGNsaWNrcyB7Y291bnR9XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJ1ZWJhO1xyXG5cclxuXHJcblxyXG4vKmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIC8vIERlZmluaW1vcyBsb3MgZXN0YWRvc1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoU3RyaW5nKVxyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShOdW1iZXIpXHJcblxyXG4gICAgLy8gTG9zIGVzdGFkb3MgZGVmaW5pZG9zIHNlIHB1ZWRlbiB1c2FyIGRlbnRybyBkZSBvdHJhcyBmdW5jaW9uZXNcclxuICAgIGZ1bmN0aW9uIG9idGVuZXJOYW1lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jaW9uYSBjb21vIHVuIGNvbXBvbmVudERpZE1vdW50IHkgY29tcG9uZW50RGlkVXBkYXRlIGFsIG1pc21vIHRpZW1wby5cclxuICAgIC8vIEVzIGRlY2lyLCBzZSBlamVjdXRhcmEgaW5tZWRpYXRhbWVudGUgY2FyZ2FkbyBlbCBzaXRpbyBzaW4gbGEgbmVjZXNpZGFkIGRlIHVuIGJvdG9uXHJcbiAgICAvLyBZIHNlIGlyYSBhY3R1YWxpemFuZG8gYWwgbWlzbW8gdGllbXBvIHF1ZSB2YXlhIGNhbWJpYW5kbyBzdSB2YWxvclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGBTdXMgY2xpY2tzICR7Y291bnR9YFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFbCBudW1lcm8gZXM6ICR7Y291bnR9YClcclxuICAgIH0pKi9cclxuXHJcbiAgICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=