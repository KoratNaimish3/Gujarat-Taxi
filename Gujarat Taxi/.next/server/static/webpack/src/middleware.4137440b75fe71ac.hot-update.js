"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(req) {\n    const token = req.cookies.get(\"adminToken\")?.value;\n    const protectedRoutes = [\n        \"/admin\"\n    ];\n    if (protectedRoutes.some((route)=>req.nextUrl.pathname.startsWith(route))) {\n        if (!token) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/admin-login\", req.url));\n        }\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\nconst config = {\n    matcher: [\n        \"/admin/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBRXBDLFNBQVNDLFdBQVdDLEdBQUc7SUFDNUIsTUFBTUMsUUFBUUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZUM7SUFFN0MsTUFBTUMsa0JBQWtCO1FBQUM7S0FBUztJQUVsQyxJQUFJQSxnQkFBZ0JDLElBQUksQ0FBQyxDQUFDQyxRQUFVUCxJQUFJUSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDSCxTQUFTO1FBQzNFLElBQUksQ0FBQ04sT0FBTztZQUNWLE9BQU9ILGtGQUFZQSxDQUFDYSxRQUFRLENBQUMsSUFBSUMsSUFBSSxnQkFBZ0JaLElBQUlhLEdBQUc7UUFDOUQ7SUFDRjtJQUVBLE9BQU9mLGtGQUFZQSxDQUFDZ0IsSUFBSTtBQUMxQjtBQUVPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFBQztLQUFnQjtBQUM1QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLmpzP2E0OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcclxuICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmdldChcImFkbWluVG9rZW5cIik/LnZhbHVlO1xyXG5cclxuICBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBbXCIvYWRtaW5cIl07XHJcblxyXG4gIGlmIChwcm90ZWN0ZWRSb3V0ZXMuc29tZSgocm91dGUpID0+IHJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgocm91dGUpKSkge1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvYWRtaW4tbG9naW5cIiwgcmVxLnVybCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogW1wiL2FkbWluLzpwYXRoKlwiXSxcclxufTtcclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsInByb3RlY3RlZFJvdXRlcyIsInNvbWUiLCJyb3V0ZSIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});