self["webpackHotUpdate_N_E"]("pages/reservas",{

/***/ "./pages/reservas.js":
/*!***************************!*\
  !*** ./pages/reservas.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\joshua\\OneDrive\\Documentos\\WorkDev\\MoM\\lomoli\\pages\\reservas.js",
    _this = undefined;







var reservas = function reservas() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_5__.default.sendForm('lomoli', 'web@lomolirestaurant.com', e.target, 'user_78Gpd36t9QDfFTquJuuma').then(function (result) {
      sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(" Gracias por solicitar su reserva. En breve le confirmaremos.");
    }, function (error) {
      console.log(error.text);
    });
  }
  /* const handleSubmit = async (e) => {
       e.preventDefault()
       const res = await fetch(
           'http://localhost:4000/api/reservas/createreservas',
           {
             body: JSON.stringify({
               comensal : e.target.nombre.value,
               correo : e.target.correo.value,
               telefono: e.target.telefono.value,
              // instagram: e.target.instagram.value,
              espacio : e.target.espacio.value,
                pax: e.target.comensales.value,
              fecha: e.target.fecha.value,
               hora: e.target.hora.value,
               promociones: e.target.promociones.value,
               cookie: e.target.cookie.value
             }),
             headers: {
               'Content-Type': 'application/json'
             },
             method: 'POST'
           }
         )
   }*/


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-1664281103",
        children: "lomoli-Reservas"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-1664281103" + " " + "main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "jsx-1664281103",
        children: "RESERVA TU MESA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "jsx-1664281103"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "jsx-1664281103",
        children: "Rellena el formulario para poder reservar tu espacio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: sendEmail,
        className: "jsx-1664281103",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "jsx-1664281103",
          children: "COMENSAL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "jsx-1664281103"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-1664281103" + " " + "inputs",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            name: "nombre",
            type: "text",
            placeholder: "Nombre",
            className: "jsx-1664281103"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            name: "correo",
            type: "mail",
            placeholder: "Correo",
            className: "jsx-1664281103"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            name: "telefono",
            type: "number",
            placeholder: "Tel\xE9fono",
            className: "jsx-1664281103"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            name: "instagram",
            type: "text",
            placeholder: "Instagram",
            className: "jsx-1664281103"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "jsx-1664281103",
          children: "QUIERO RESERVAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "jsx-1664281103"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "espacio",
          className: "jsx-1664281103",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "",
            className: "jsx-1664281103",
            children: "Espacio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "Terraza"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "Interior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "comensales",
          className: "jsx-1664281103",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "1",
            className: "jsx-1664281103",
            children: "Numero de Comensales"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            className: "jsx-1664281103",
            children: "8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-1664281103" + " " + "date",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "jsx-1664281103",
            children: "Fecha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            name: "fecha",
            type: "date",
            min: "2021-08-06",
            className: "jsx-1664281103"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            className: "jsx-1664281103" + " " + "hora",
            children: "Hora"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            name: "hora",
            type: "time",
            min: "13:00",
            max: "23:00",
            className: "jsx-1664281103"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-1664281103" + " " + "permisos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-1664281103",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "checkbox",
              id: "permiso",
              name: "promociones",
              className: "jsx-1664281103"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "checkbox",
              id: "permisos",
              name: "cookie",
              className: "jsx-1664281103"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "jsx-1664281103",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "permiso",
              className: "jsx-1664281103",
              children: "Acepto recibir noticias y promociones del restaurante"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "permisos",
              className: "jsx-1664281103",
              children: "He le\xEDdo las Pol\xEDticas de empresa y acepto las condiciones "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "jsx-1664281103",
          children: "SOLICITUDES"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          name: "solicitudes",
          id: "solicitudes",
          cols: "47.8",
          rows: "5",
          className: "jsx-1664281103"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "jsx-1664281103" + " " + "d-block",
          children: "SOLICITAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1664281103",
      children: "h2.jsx-1664281103{margin:35px 0px 3px 0px;padding-left:10px;}h3.jsx-1664281103{margin:10px 0 0px 0;}.date.jsx-1664281103{width:100%;font-size:11.8px;color:rgb(167,167,167);}.date.jsx-1664281103 input.jsx-1664281103{display:inline-block;width:auto;color:rgb(167,167,167);}.date.jsx-1664281103 label.jsx-1664281103{margin:0 6.5px;}span.jsx-1664281103{display:block;background-color:rgb(90,90,90);height:1px;}input.jsx-1664281103{font-size:11.8px;outline:none;border:none border-color:rgb(90,90,90);padding:0 0 0 5px;width:85%;margin-top:8px;}select.jsx-1664281103{color:rgb(167,167,167);font-size:11.8px;padding:1px 1px 0 5px;border:none border-color:rgb(90,90,90);outline:none;width:85%;margin-top:8px;}.permisos.jsx-1664281103{display:grid;grid-template-columns:5% 95%;margin-top:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.permisos.jsx-1664281103 label.jsx-1664281103{font-size:12px;color:rgb(167,167,167);margin-bottom:0;}img.jsx-1664281103{height:auto;width:100%;}@media(min-width:750px){.date.jsx-1664281103{text-align:center;width:85%;}.date.jsx-1664281103 label.jsx-1664281103{margin:0 10px;}textarea.jsx-1664281103{color:#00000091;padding:1rem;width:90% resize:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9zaHVhXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcV29ya0RldlxcTW9NXFxsb21vbGlcXHBhZ2VzXFxyZXNlcnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR3dCLEFBS3dDLEFBSUosQUFJVCxBQUtXLEFBS04sQUFHRCxBQUtFLEFBU1MsQUFVWixBQU1DLEFBS0YsQUFLVSxBQUlKLEFBR0UsV0EzREosQ0FnREosQ0FYaUIsQ0F4QkcsQUE0Q2hDLENBL0NKLEFBaUM2QixDQWlCVCxDQTFDSCxDQW1DQSxFQXpEakIsQ0FTYyxFQXNCTSxBQXNCcEIsQ0F6RHFCLElBU1EsQUFxRHpCLENBUWdCLENBMUNZLEVBZEgsTUFzQ1QsRUFoQk0sRUFuQzFCLEFBNkNtQixHQXhCSixNQVpmLEFBNkRJLEdBbEJKLENBdENBLENBUUEsRUF3QnNCLElBVFUsT0FUVixrQkFDVCxVQUNLLElBUUQsV0FQakIsRUFRYSxVQUNLLGVBQ2xCLFlBTUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb3NodWFcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxXb3JrRGV2XFxNb01cXGxvbW9saVxccGFnZXNcXHJlc2VydmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCJcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xyXG5cclxuY29uc3QgcmVzZXJ2YXMgPSAoKSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZEVtYWlsKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBlbWFpbGpzLnNlbmRGb3JtKCdsb21vbGknLCAnd2ViQGxvbW9saXJlc3RhdXJhbnQuY29tJywgZS50YXJnZXQsICd1c2VyXzc4R3BkMzZ0OVFEZkZUcXVKdXVtYScpXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgc3dhbChcIiBHcmFjaWFzIHBvciBzb2xpY2l0YXIgc3UgcmVzZXJ2YS4gRW4gYnJldmUgbGUgY29uZmlybWFyZW1vcy5cIik7XHJcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgLyogY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvcmVzZXJ2YXMvY3JlYXRlcmVzZXJ2YXMnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgY29tZW5zYWwgOiBlLnRhcmdldC5ub21icmUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjb3JyZW8gOiBlLnRhcmdldC5jb3JyZW8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0ZWxlZm9ubzogZS50YXJnZXQudGVsZWZvbm8udmFsdWUsXHJcbiAgICAgICAgICAgICAgIC8vIGluc3RhZ3JhbTogZS50YXJnZXQuaW5zdGFncmFtLnZhbHVlLFxyXG4gICAgICAgICAgICAgICBlc3BhY2lvIDogZS50YXJnZXQuZXNwYWNpby52YWx1ZSxcclxuICAgICAgICAgICAgICAgICBwYXg6IGUudGFyZ2V0LmNvbWVuc2FsZXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgIGZlY2hhOiBlLnRhcmdldC5mZWNoYS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGhvcmE6IGUudGFyZ2V0LmhvcmEudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwcm9tb2Npb25lczogZS50YXJnZXQucHJvbW9jaW9uZXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjb29raWU6IGUudGFyZ2V0LmNvb2tpZS52YWx1ZVxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIClcclxuICAgIH0qL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWQ+PHRpdGxlPmxvbW9saS1SZXNlcnZhczwvdGl0bGU+PC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxoMT5SRVNFUlZBIFRVIE1FU0E8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgzPlJlbGxlbmEgZWwgZm9ybXVsYXJpbyBwYXJhIHBvZGVyIHJlc2VydmFyIHR1IGVzcGFjaW88L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyBzZW5kRW1haWx9ID5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+Q09NRU5TQUw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5vbWJyZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb21icmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNvcnJlb1wiIHR5cGU9XCJtYWlsXCIgcGxhY2Vob2xkZXI9XCJDb3JyZW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRlbGVmb25vXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiVGVsw6lmb25vXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbnN0YWdyYW1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW5zdGFncmFtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UVVJRVJPIFJFU0VSVkFSPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZXNwYWNpb1wiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Fc3BhY2lvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+VGVycmF6YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkludGVyaW9yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY29tZW5zYWxlc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIiA+TnVtZXJvIGRlIENvbWVuc2FsZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj43PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+ODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmVjaGE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImZlY2hhXCIgdHlwZT1cImRhdGVcIiBtaW49XCIyMDIxLTA4LTA2XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yYVwiPkhvcmE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImhvcmFcIiB0eXBlPVwidGltZVwiIG1pbj1cIjEzOjAwXCIgbWF4PVwiMjM6MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVybWlzb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInBlcm1pc29cIiBuYW1lPVwicHJvbW9jaW9uZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwZXJtaXNvc1wiIG5hbWU9XCJjb29raWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGVybWlzb1wiPkFjZXB0byByZWNpYmlyIG5vdGljaWFzIHkgcHJvbW9jaW9uZXMgZGVsIHJlc3RhdXJhbnRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGVybWlzb3NcIj5IZSBsZcOtZG8gbGFzIFBvbMOtdGljYXMgZGUgZW1wcmVzYSB5IGFjZXB0byBsYXMgY29uZGljaW9uZXMgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlNPTElDSVRVREVTPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInNvbGljaXR1ZGVzXCIgaWQ9XCJzb2xpY2l0dWRlc1wiIGNvbHM9XCI0Ny44XCIgcm93cz1cIjVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5TT0xJQ0lUQVI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjM1cHggMHB4IDNweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4IDAgMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTEuOHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGF0ZSBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDphdXRvOyAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhdGUgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNi41cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDkwLCA5MCwgOTApO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTEuOHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjpub25lXHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6cmdiKDkwLCA5MCwgOTApO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ODUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY3LCAxNjcsIDE2Nyk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTEuOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDFweCAwIDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjpub25lXHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6cmdiKDkwLCA5MCwgOTApO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjg1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6OHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wZXJtaXNvc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDk1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGVybWlzb3MgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY3LCAxNjcsIDE2Nyk7IFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7IFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYShtaW4td2lkdGg6NzUwcHgpe1xyXG4gICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo4NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGF0ZSBsYWJlbHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDkxO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9mYXp0dGVjaCcpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSovXHJcbi8qIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0KGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGZvcm1kYXRhID0ge30gXHJcbiAgICAgIEFycmF5LmZyb20oZS5jdXJyZW50VGFyZ2V0LmVsZW1lbnRzKS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGlmICghZmllbGQubmFtZSkgcmV0dXJuO1xyXG4gICAgICAgICAgZm9ybWRhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9yZXNlcnZhcy9jcmVhdGVyZXNlcnZhcycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgIGxvY2FsOlwidGVycmF6YVwiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KSAgICBcclxuICAgICAgY29uc29sZS5sb2coZm9ybWRhdGEpOyAgICAgXHJcbiAgfSovXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2VydmFzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\joshua\\\\OneDrive\\\\Documentos\\\\WorkDev\\\\MoM\\\\lomoli\\\\pages\\\\reservas.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, _this);
};
/*export async function getServerSideProps(){
    const res = await fetch('https://api.github.com/users/fazttech')
    const data = await res.json();
    console.log(data)
    return {
        props: {

        }
    }
}*/

/* async function handleOnSubmit(e){
      e.preventDefault();
      const formdata = {} 
      Array.from(e.currentTarget.elements).forEach(field => {
          if (!field.name) return;
          formdata[field.name] = field.value;

      });
      await fetch('http://localhost:4000/api/reservas/createreservas', {
          method: 'post',
          body: JSON.stringify({
              local:"terraza"
          })
      })    
      console.log(formdata);     
  }*/


/* harmony default export */ __webpack_exports__["default"] = (reservas);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXJ2YXMuanMiXSwibmFtZXMiOlsicmVzZXJ2YXMiLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbGpzIiwidGFyZ2V0IiwidGhlbiIsInJlc3VsdCIsInN3YWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBRW5CLFdBQVNDLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCO0FBQ2xCQSxLQUFDLENBQUNDLGNBQUY7QUFFQUMsNkRBQUEsQ0FBaUIsUUFBakIsRUFBMkIsMEJBQTNCLEVBQXVERixDQUFDLENBQUNHLE1BQXpELEVBQWlFLDRCQUFqRSxFQUNHQyxJQURILENBQ1EsVUFBQ0MsTUFBRCxFQUFZO0FBQ2RDLHVEQUFJLENBQUMsK0RBQUQsQ0FBSjtBQUNILEtBSEgsRUFHSyxVQUFDQyxLQUFELEVBQVc7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csSUFBbEI7QUFDSCxLQUxIO0FBTUQ7QUFFSjtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVJLHNCQUNJLDhEQUFDLDBEQUFEO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSwwQ0FBZSxNQUFmO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEySUgsQ0FqTEQ7QUFtTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLCtEQUFlRCxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2VydmFzLmE5YmFmNzBjNGFjMWI2MjY4NjAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIlxyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tICdlbWFpbGpzLWNvbSc7XHJcblxyXG5jb25zdCByZXNlcnZhcyA9ICgpID0+IHtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kRW1haWwoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGVtYWlsanMuc2VuZEZvcm0oJ2xvbW9saScsICd3ZWJAbG9tb2xpcmVzdGF1cmFudC5jb20nLCBlLnRhcmdldCwgJ3VzZXJfNzhHcGQzNnQ5UURmRlRxdUp1dW1hJylcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBzd2FsKFwiIEdyYWNpYXMgcG9yIHNvbGljaXRhciBzdSByZXNlcnZhLiBFbiBicmV2ZSBsZSBjb25maXJtYXJlbW9zLlwiKTtcclxuICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAvKiBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9yZXNlcnZhcy9jcmVhdGVyZXNlcnZhcycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBjb21lbnNhbCA6IGUudGFyZ2V0Lm5vbWJyZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNvcnJlbyA6IGUudGFyZ2V0LmNvcnJlby52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRlbGVmb25vOiBlLnRhcmdldC50ZWxlZm9uby52YWx1ZSxcclxuICAgICAgICAgICAgICAgLy8gaW5zdGFncmFtOiBlLnRhcmdldC5pbnN0YWdyYW0udmFsdWUsXHJcbiAgICAgICAgICAgICAgIGVzcGFjaW8gOiBlLnRhcmdldC5lc3BhY2lvLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgIHBheDogZS50YXJnZXQuY29tZW5zYWxlcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgZmVjaGE6IGUudGFyZ2V0LmZlY2hhLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgaG9yYTogZS50YXJnZXQuaG9yYS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHByb21vY2lvbmVzOiBlLnRhcmdldC5wcm9tb2Npb25lcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNvb2tpZTogZS50YXJnZXQuY29va2llLnZhbHVlXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgfSovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SGVhZD48dGl0bGU+bG9tb2xpLVJlc2VydmFzPC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlJFU0VSVkEgVFUgTUVTQTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDM+UmVsbGVuYSBlbCBmb3JtdWxhcmlvIHBhcmEgcG9kZXIgcmVzZXJ2YXIgdHUgZXNwYWNpbzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IHNlbmRFbWFpbH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5DT01FTlNBTDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibm9tYnJlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY29ycmVvXCIgdHlwZT1cIm1haWxcIiBwbGFjZWhvbGRlcj1cIkNvcnJlb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidGVsZWZvbm9cIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJUZWzDqWZvbm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImluc3RhZ3JhbVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnN0YWdyYW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5RVUlFUk8gUkVTRVJWQVI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJlc3BhY2lvXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkVzcGFjaW88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5UZXJyYXphPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SW50ZXJpb3I8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjb21lbnNhbGVzXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiID5OdW1lcm8gZGUgQ29tZW5zYWxlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj44PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GZWNoYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZmVjaGFcIiB0eXBlPVwiZGF0ZVwiIG1pbj1cIjIwMjEtMDgtMDZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJob3JhXCI+SG9yYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaG9yYVwiIHR5cGU9XCJ0aW1lXCIgbWluPVwiMTM6MDBcIiBtYXg9XCIyMzowMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJtaXNvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGVybWlzb1wiIG5hbWU9XCJwcm9tb2Npb25lc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInBlcm1pc29zXCIgbmFtZT1cImNvb2tpZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwZXJtaXNvXCI+QWNlcHRvIHJlY2liaXIgbm90aWNpYXMgeSBwcm9tb2Npb25lcyBkZWwgcmVzdGF1cmFudGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwZXJtaXNvc1wiPkhlIGxlw61kbyBsYXMgUG9sw610aWNhcyBkZSBlbXByZXNhIHkgYWNlcHRvIGxhcyBjb25kaWNpb25lcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+U09MSUNJVFVERVM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwic29saWNpdHVkZXNcIiBpZD1cInNvbGljaXR1ZGVzXCIgY29scz1cIjQ3LjhcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPlNPTElDSVRBUjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MzVweCAwcHggM3B4IDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjEwcHggMCAwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMS44cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDE2NywgMTY3LCAxNjcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYXRlIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOmF1dG87ICAgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDE2NywgMTY3LCAxNjcpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGF0ZSBsYWJlbHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA2LjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoOTAsIDkwLCA5MCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMS44cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOm5vbmVcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjpyZ2IoOTAsIDkwLCA5MCk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo4NSU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMS44cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMXB4IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOm5vbmVcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjpyZ2IoOTAsIDkwLCA5MCk7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ODUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBlcm1pc29ze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgOTUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wZXJtaXNvcyBsYWJlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTsgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHsgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDo3NTBweCl7XHJcbiAgICAgICAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kYXRlIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwOTE7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCVcclxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG4vKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2ZhenR0ZWNoJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Ki9cclxuLyogYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXQoZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgZm9ybWRhdGEgPSB7fSBcclxuICAgICAgQXJyYXkuZnJvbShlLmN1cnJlbnRUYXJnZXQuZWxlbWVudHMpLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgaWYgKCFmaWVsZC5uYW1lKSByZXR1cm47XHJcbiAgICAgICAgICBmb3JtZGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3Jlc2VydmFzL2NyZWF0ZXJlc2VydmFzJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgbG9jYWw6XCJ0ZXJyYXphXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtZGF0YSk7ICAgICBcclxuICB9Ki9cclxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXM7Il0sInNvdXJjZVJvb3QiOiIifQ==