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
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\joshua\\OneDrive\\Documentos\\WorkDev\\MoM\\lomoli\\pages\\prueba.js";



const prueba = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default().sendForm('pruebas', 'template_07kp3eb', e.target, 'user_qAr5BuiH5kTLY6BG2owHe').then(result => {
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "contact-form",
    onSubmit: sendEmail,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "hidden",
      name: "contact_number"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: "Name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text",
      name: "nombre"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "email",
      name: "correo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      children: "Message"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
      name: "espacio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "submit",
      value: "Send"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, undefined);
};
/*  // Definimos los estados
  const [name, setName] = useState(String)
  const [count, setCount] = useState(false)
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
  })

  return(
   <div className="main">
       <p>Ingresa algo: <input type="text" onChange={e => setName(e.target.value)} /></p>
       <p>Ingresaste: {name}</p>
       <button onClick={obtenerName}>Obtener Nombre en consola</button>
       <br/>
       <button onClick={() => setCount(!count) }>Click Me</button>
       <br/>
       Sus clicks {count}
   </div>
)
}*/


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

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("emailjs-com");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb21vbGkvLi9wYWdlcy9wcnVlYmEuanMiLCJ3ZWJwYWNrOi8vbG9tb2xpL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly9sb21vbGkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xvbW9saS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInBydWViYSIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJ0YXJnZXQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFFakIsV0FBU0MsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBQywrREFBQSxDQUFpQixTQUFqQixFQUE0QixrQkFBNUIsRUFBZ0RGLENBQUMsQ0FBQ0csTUFBbEQsRUFBMEQsNEJBQTFELEVBQ0dDLElBREgsQ0FDU0MsTUFBRCxJQUFZO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNHLElBQW5CO0FBQ0gsS0FISCxFQUdNQyxLQUFELElBQVc7QUFDVkgsYUFBTyxDQUFDQyxHQUFSLENBQVlFLEtBQUssQ0FBQ0QsSUFBbEI7QUFDSCxLQUxIO0FBTUQ7O0FBRUQsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsY0FBaEI7QUFBK0IsWUFBUSxFQUFFVCxTQUF6QztBQUFBLDRCQUNFO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsVUFBSSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFO0FBQU8sVUFBSSxFQUFDLE9BQVo7QUFBb0IsVUFBSSxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FO0FBQVUsVUFBSSxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVFFO0FBQU8sVUFBSSxFQUFDLFFBQVo7QUFBcUIsV0FBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQXpCSDtBQTJCRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBLCtEQUFlRCxNQUFmO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxROzs7Ozs7Ozs7OztBQ2pGQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wcnVlYmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xyXG5cclxuY29uc3QgcHJ1ZWJhID0gKCkgPT4ge1xyXG4gIFxyXG4gICAgZnVuY3Rpb24gc2VuZEVtYWlsKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgICBlbWFpbGpzLnNlbmRGb3JtKCdwcnVlYmFzJywgJ3RlbXBsYXRlXzA3a3AzZWInLCBlLnRhcmdldCwgJ3VzZXJfcUFyNUJ1aUg1a1RMWTZCRzJvd0hlJylcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIiBvblN1Ym1pdD17c2VuZEVtYWlsfT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjb250YWN0X251bWJlclwiIC8+XHJcbiAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJub21icmVcIiAvPlxyXG4gICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJjb3JyZW9cIiAvPlxyXG4gICAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImVzcGFjaW9cIiAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gICAvKiAgLy8gRGVmaW5pbW9zIGxvcyBlc3RhZG9zXHJcbiAgICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoU3RyaW5nKVxyXG4gICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiBcclxuICAgICAvLyBMb3MgZXN0YWRvcyBkZWZpbmlkb3Mgc2UgcHVlZGVuIHVzYXIgZGVudHJvIGRlIG90cmFzIGZ1bmNpb25lc1xyXG4gICAgIGZ1bmN0aW9uIG9idGVuZXJOYW1lKCl7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLy8gRnVuY2lvbmEgY29tbyB1biBjb21wb25lbnREaWRNb3VudCB5IGNvbXBvbmVudERpZFVwZGF0ZSBhbCBtaXNtbyB0aWVtcG8uXHJcbiAgICAgLy8gRXMgZGVjaXIsIHNlIGVqZWN1dGFyYSBpbm1lZGlhdGFtZW50ZSBjYXJnYWRvIGVsIHNpdGlvIHNpbiBsYSBuZWNlc2lkYWQgZGUgdW4gYm90b25cclxuICAgICAvLyBZIHNlIGlyYSBhY3R1YWxpemFuZG8gYWwgbWlzbW8gdGllbXBvIHF1ZSB2YXlhIGNhbWJpYW5kbyBzdSB2YWxvclxyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gYFN1cyBjbGlja3MgJHtjb3VudH1gXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGBFbCBudW1lcm8gZXM6ICR7Y291bnR9YClcclxuICAgICB9KVxyXG4gXHJcblxyXG4gICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICA8cD5JbmdyZXNhIGFsZ286IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPjwvcD5cclxuICAgICAgICAgIDxwPkluZ3Jlc2FzdGU6IHtuYW1lfTwvcD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b2J0ZW5lck5hbWV9Pk9idGVuZXIgTm9tYnJlIGVuIGNvbnNvbGE8L2J1dHRvbj5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KCFjb3VudCkgfT5DbGljayBNZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIFN1cyBjbGlja3Mge2NvdW50fVxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJ1ZWJhO1xyXG5cclxuXHJcblxyXG4vKmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIC8vIERlZmluaW1vcyBsb3MgZXN0YWRvc1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoU3RyaW5nKVxyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShOdW1iZXIpXHJcblxyXG4gICAgLy8gTG9zIGVzdGFkb3MgZGVmaW5pZG9zIHNlIHB1ZWRlbiB1c2FyIGRlbnRybyBkZSBvdHJhcyBmdW5jaW9uZXNcclxuICAgIGZ1bmN0aW9uIG9idGVuZXJOYW1lKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jaW9uYSBjb21vIHVuIGNvbXBvbmVudERpZE1vdW50IHkgY29tcG9uZW50RGlkVXBkYXRlIGFsIG1pc21vIHRpZW1wby5cclxuICAgIC8vIEVzIGRlY2lyLCBzZSBlamVjdXRhcmEgaW5tZWRpYXRhbWVudGUgY2FyZ2FkbyBlbCBzaXRpbyBzaW4gbGEgbmVjZXNpZGFkIGRlIHVuIGJvdG9uXHJcbiAgICAvLyBZIHNlIGlyYSBhY3R1YWxpemFuZG8gYWwgbWlzbW8gdGllbXBvIHF1ZSB2YXlhIGNhbWJpYW5kbyBzdSB2YWxvclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGBTdXMgY2xpY2tzICR7Y291bnR9YFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFbCBudW1lcm8gZXM6ICR7Y291bnR9YClcclxuICAgIH0pKi9cclxuXHJcbiAgICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtYWlsanMtY29tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9