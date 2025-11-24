"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/blogs/route";
exports.ids = ["app/api/blogs/route"];
exports.modules = {

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/at":
/*!****************************!*\
  !*** external "lodash/at" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("lodash/at");

/***/ }),

/***/ "lodash/clone":
/*!*******************************!*\
  !*** external "lodash/clone" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/clone");

/***/ }),

/***/ "lodash/compact":
/*!*********************************!*\
  !*** external "lodash/compact" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/filter");

/***/ }),

/***/ "lodash/first":
/*!*******************************!*\
  !*** external "lodash/first" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ "lodash/includes":
/*!**********************************!*\
  !*** external "lodash/includes" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ "lodash/take":
/*!******************************!*\
  !*** external "lodash/take" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/take");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fblogs%2Froute&page=%2Fapi%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2Froute.js&appDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fblogs%2Froute&page=%2Fapi%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2Froute.js&appDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_orins_tech_Gujarat_Taxi_Gujarat_Taxi_src_app_api_blogs_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/blogs/route.js */ \"(rsc)/./src/app/api/blogs/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/blogs/route\",\n        pathname: \"/api/blogs\",\n        filename: \"route\",\n        bundlePath: \"app/api/blogs/route\"\n    },\n    resolvedPagePath: \"D:\\\\orins tech\\\\Gujarat Taxi\\\\Gujarat Taxi\\\\src\\\\app\\\\api\\\\blogs\\\\route.js\",\n    nextConfigOutput,\n    userland: D_orins_tech_Gujarat_Taxi_Gujarat_Taxi_src_app_api_blogs_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/blogs/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZibG9ncyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYmxvZ3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZibG9ncyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDb3JpbnMlMjB0ZWNoJTVDR3VqYXJhdCUyMFRheGklNUNHdWphcmF0JTIwVGF4aSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q29yaW5zJTIwdGVjaCU1Q0d1amFyYXQlMjBUYXhpJTVDR3VqYXJhdCUyMFRheGkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEI7QUFDdkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWphcmF0LXRheGkvP2JkMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcb3JpbnMgdGVjaFxcXFxHdWphcmF0IFRheGlcXFxcR3VqYXJhdCBUYXhpXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGJsb2dzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ibG9ncy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Jsb2dzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ibG9ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXG9yaW5zIHRlY2hcXFxcR3VqYXJhdCBUYXhpXFxcXEd1amFyYXQgVGF4aVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxibG9nc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9ibG9ncy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fblogs%2Froute&page=%2Fapi%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2Froute.js&appDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/blogs/route.js":
/*!************************************!*\
  !*** ./src/app/api/blogs/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ \"(rsc)/./src/app/lib/db.js\");\n/* harmony import */ var _models_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/blog */ \"(rsc)/./src/app/models/blog.js\");\n/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/cloudinary */ \"(rsc)/./src/app/lib/cloudinary.js\");\n\n\n\n\n// POST /api/blogs → Create new blog\nasync function POST(req) {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const formData = await req.formData();\n        const title = formData.get(\"title\");\n        const slug = formData.get(\"slug\");\n        const description = formData.get(\"description\");\n        const metaTitle = formData.get(\"metaTitle\");\n        const metaDescription = formData.get(\"metaDescription\");\n        const extra_metatag = formData.get(\"extra_metatag\");\n        const metaKeywords = formData.get(\"metaKeywords\")?.split(\",\").map((k)=>k.trim());\n        const imageFile = formData.get(\"image\");\n        if (!title || !slug || !description || !imageFile) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Title, slug, and description are required.\",\n                success: false\n            }, {\n                status: 400\n            });\n        }\n        const existing = await _models_blog__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            slug\n        });\n        if (existing) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Slug already exists. Please change the title.\",\n                success: false\n            }, {\n                status: 400\n            });\n        }\n        if (imageFile) {\n            const bytes = await imageFile.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            const uploadRes = await new Promise((resolve, reject)=>{\n                _lib_cloudinary__WEBPACK_IMPORTED_MODULE_3__[\"default\"].uploader.upload_stream({\n                    folder: \"gujrat_taxi/blogs\"\n                }, (err, result)=>{\n                    if (err) reject(err);\n                    else resolve(result);\n                }).end(buffer);\n            });\n            const imageUrl = uploadRes.secure_url;\n            const publicId = uploadRes.public_id;\n            console.log(publicId);\n            const newBlog = await _models_blog__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n                title,\n                slug,\n                image: imageUrl,\n                img_publicId: publicId,\n                description,\n                metaTitle,\n                metaDescription,\n                metaKeywords,\n                extra_metatag,\n                status: \"published\"\n            });\n            console.log(publicId);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Blog created successfully!\",\n                blog: newBlog,\n                success: true\n            }, {\n                status: 201\n            });\n        }\n    } catch (error) {\n        console.error(\"Error creating blog:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Internal Server Error\",\n            error: error.message,\n            success: false\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET() {\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const blogs = await _models_blog__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find().sort({\n            createdAt: -1\n        });\n        const totalBlogs = await _models_blog__WEBPACK_IMPORTED_MODULE_2__[\"default\"].countDocuments();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            blogs,\n            totalBlogs\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Failed to fetch blogs\",\n            error: error.message,\n            success: false\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9EQUFJQSxDQUFDeUQsY0FBYztRQUU1QyxPQUFPM0Qsa0ZBQVlBLENBQUNvQixJQUFJLENBQUM7WUFBRWtDO1lBQVFJO1FBQVcsR0FBRztZQUFFbkMsUUFBUTtRQUFJO0lBQ25FLEVBQUUsT0FBTzZCLE9BQU87UUFDWixPQUFPcEQsa0ZBQVlBLENBQUNvQixJQUFJLENBQ3BCO1lBQUVDLFNBQVM7WUFBeUIrQixPQUFPQSxNQUFNL0IsT0FBTztZQUFFQyxTQUFTO1FBQU0sR0FDekU7WUFBRUMsUUFBUTtRQUFJO0lBRXRCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWphcmF0LXRheGkvLi9zcmMvYXBwL2FwaS9ibG9ncy9yb3V0ZS5qcz83MjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCIuLi8uLi9saWIvZGJcIjtcclxuaW1wb3J0IEJMT0cgZnJvbSBcIi4uLy4uL21vZGVscy9ibG9nXCI7XHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCIuLi8uLi9saWIvY2xvdWRpbmFyeVwiO1xyXG5cclxuLy8gUE9TVCAvYXBpL2Jsb2dzIOKGkiBDcmVhdGUgbmV3IGJsb2dcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpXHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIilcclxuICAgICAgICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKVxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIilcclxuICAgICAgICBjb25zdCBtZXRhVGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJtZXRhVGl0bGVcIilcclxuICAgICAgICBjb25zdCBtZXRhRGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJtZXRhRGVzY3JpcHRpb25cIilcclxuICAgICAgICBjb25zdCBleHRyYV9tZXRhdGFnID0gZm9ybURhdGEuZ2V0KFwiZXh0cmFfbWV0YXRhZ1wiKVxyXG4gICAgICAgIGNvbnN0IG1ldGFLZXl3b3JkcyA9IChmb3JtRGF0YS5nZXQoXCJtZXRhS2V5d29yZHNcIikpXHJcbiAgICAgICAgICAgID8uc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICAgIC5tYXAoKGspID0+IGsudHJpbSgpKTtcclxuICAgICAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKVxyXG5cclxuXHJcbiAgICAgICAgaWYgKCF0aXRsZSB8fCAhc2x1ZyB8fCAhZGVzY3JpcHRpb24gfHwgIWltYWdlRmlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2U6IFwiVGl0bGUsIHNsdWcsIGFuZCBkZXNjcmlwdGlvbiBhcmUgcmVxdWlyZWQuXCIsIHN1Y2Nlc3M6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgQkxPRy5maW5kT25lKHsgc2x1ZyB9KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgICAgICAgICAgeyBtZXNzYWdlOiBcIlNsdWcgYWxyZWFkeSBleGlzdHMuIFBsZWFzZSBjaGFuZ2UgdGhlIHRpdGxlLlwiLCBzdWNjZXNzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW1hZ2VGaWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgaW1hZ2VGaWxlLmFycmF5QnVmZmVyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZFJlcyA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsb3VkaW5hcnkudXBsb2FkZXIudXBsb2FkX3N0cmVhbShcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcjogXCJndWpyYXRfdGF4aS9ibG9nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkuZW5kKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSB1cGxvYWRSZXMuc2VjdXJlX3VybDtcclxuICAgICAgICAgICAgY29uc3QgcHVibGljSWQgPSB1cGxvYWRSZXMucHVibGljX2lkO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHVibGljSWQpXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3QmxvZyA9IGF3YWl0IEJMT0cuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc2x1ZyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBpbWFnZVVybCxcclxuICAgICAgICAgICAgICAgIGltZ19wdWJsaWNJZDogcHVibGljSWQsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG1ldGFUaXRsZSxcclxuICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG1ldGFLZXl3b3JkcyxcclxuICAgICAgICAgICAgICAgIGV4dHJhX21ldGF0YWcsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwicHVibGlzaGVkXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHVibGljSWQpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2U6IFwiQmxvZyBjcmVhdGVkIHN1Y2Nlc3NmdWxseSFcIiwgYmxvZzogbmV3QmxvZywgc3VjY2VzczogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzdGF0dXM6IDIwMSB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYmxvZzpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgICAgeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBlcnJvcjogZXJyb3IubWVzc2FnZSwgc3VjY2VzczogZmFsc2UgfSxcclxuICAgICAgICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2dzID0gYXdhaXQgQkxPRy5maW5kKCkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSk7XHJcbiAgICAgICAgY29uc3QgdG90YWxCbG9ncyA9IGF3YWl0IEJMT0cuY291bnREb2N1bWVudHMoKTsgXHJcblxyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGJsb2dzICwgdG90YWxCbG9ncyB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gZmV0Y2ggYmxvZ3NcIiwgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIHN1Y2Nlc3M6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3REQiIsIkJMT0ciLCJjbG91ZGluYXJ5IiwiUE9TVCIsInJlcSIsImZvcm1EYXRhIiwidGl0bGUiLCJnZXQiLCJzbHVnIiwiZGVzY3JpcHRpb24iLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJleHRyYV9tZXRhdGFnIiwibWV0YUtleXdvcmRzIiwic3BsaXQiLCJtYXAiLCJrIiwidHJpbSIsImltYWdlRmlsZSIsImpzb24iLCJtZXNzYWdlIiwic3VjY2VzcyIsInN0YXR1cyIsImV4aXN0aW5nIiwiZmluZE9uZSIsImJ5dGVzIiwiYXJyYXlCdWZmZXIiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwidXBsb2FkUmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cGxvYWRlciIsInVwbG9hZF9zdHJlYW0iLCJmb2xkZXIiLCJlcnIiLCJyZXN1bHQiLCJlbmQiLCJpbWFnZVVybCIsInNlY3VyZV91cmwiLCJwdWJsaWNJZCIsInB1YmxpY19pZCIsImNvbnNvbGUiLCJsb2ciLCJuZXdCbG9nIiwiY3JlYXRlIiwiaW1hZ2UiLCJpbWdfcHVibGljSWQiLCJibG9nIiwiZXJyb3IiLCJHRVQiLCJibG9ncyIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwidG90YWxCbG9ncyIsImNvdW50RG9jdW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/blogs/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/cloudinary.js":
/*!***********************************!*\
  !*** ./src/app/lib/cloudinary.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9jbG91ZGluYXJ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5Q0MsMENBQVVBLENBQUNDLE1BQU0sQ0FBQztJQUNoQkMsWUFBWUMsUUFBUUMsR0FBRyxDQUFDQyxxQkFBcUI7SUFDN0NDLFNBQVNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCO0lBQ3ZDQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLHFCQUFxQjtBQUMvQztBQUVBLGlFQUFlVCwwQ0FBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2d1amFyYXQtdGF4aS8uL3NyYy9hcHAvbGliL2Nsb3VkaW5hcnkuanM/ZDZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2MiBhcyBjbG91ZGluYXJ5IH0gZnJvbSBcImNsb3VkaW5hcnlcIjtcclxuXHJcbmNsb3VkaW5hcnkuY29uZmlnKHtcclxuICBjbG91ZF9uYW1lOiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0NMT1VEX05BTUUsXHJcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfS0VZLFxyXG4gIGFwaV9zZWNyZXQ6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQVBJX1NFQ1JFVCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbG91ZGluYXJ5O1xyXG4iXSwibmFtZXMiOlsidjIiLCJjbG91ZGluYXJ5IiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX0NMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURJTkFSWV9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/cloudinary.js\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/db.js":
/*!***************************!*\
  !*** ./src/app/lib/db.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        // Check if already connected\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n            return; // Already connected\n        }\n        // Check if connection is in progress\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 2) {\n            // Wait for connection to complete\n            await new Promise((resolve)=>{\n                mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.once(\"connected\", resolve);\n            });\n            return;\n        }\n        // Connect to database\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/gujrat_taxi\");\n        console.log(\"Database Connected\");\n    } catch (error) {\n        console.log(\"Error in DB Connect\", error.message);\n        throw error;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsWUFBWTtJQUNkLElBQUk7UUFDQSw2QkFBNkI7UUFDN0IsSUFBSUQsNERBQW1CLENBQUNHLFVBQVUsS0FBSyxHQUFHO1lBQ3RDLFFBQVEsb0JBQW9CO1FBQ2hDO1FBRUEscUNBQXFDO1FBQ3JDLElBQUlILDREQUFtQixDQUFDRyxVQUFVLEtBQUssR0FBRztZQUN0QyxrQ0FBa0M7WUFDbEMsTUFBTSxJQUFJQyxRQUFRLENBQUNDO2dCQUNmTCwwREFBbUIsQ0FBQ00sSUFBSSxDQUFDLGFBQWFEO1lBQzFDO1lBQ0E7UUFDSjtRQUVBLHNCQUFzQjtRQUN0QixNQUFNTCx1REFBZ0IsQ0FBQztRQUN2QlEsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCLEVBQUUsT0FBT0MsT0FBTztRQUNaRixRQUFRQyxHQUFHLENBQUMsdUJBQXVCQyxNQUFNQyxPQUFPO1FBQ2hELE1BQU1EO0lBQ1Y7QUFDSjtBQUVBLGlFQUFlVCxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VqYXJhdC10YXhpLy4vc3JjL2FwcC9saWIvZGIuanM/MTQ3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGNvbm5lY3RlZFxuICAgICAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIEFscmVhZHkgY29ubmVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBjb25uZWN0aW9uIGlzIGluIHByb2dyZXNzXG4gICAgICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIGNvbm5lY3Rpb24gdG8gY29tcGxldGVcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbmNlKFwiY29ubmVjdGVkXCIsIHJlc29sdmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25uZWN0IHRvIGRhdGFiYXNlXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2d1anJhdF90YXhpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIENvbm5lY3RlZFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIERCIENvbm5lY3RcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uY2UiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/blog.js":
/*!********************************!*\
  !*** ./src/app/models/blog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst blogSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        require: true\n    },\n    image: {\n        type: String,\n        require: true\n    },\n    // used to delete image in cloudinary when delete bolg\n    img_publicId: {\n        type: String\n    },\n    description: {\n        type: String,\n        require: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    metaTitle: {\n        type: String,\n        maxlength: 60\n    },\n    metaDescription: {\n        type: String,\n        maxlength: 160\n    },\n    metaKeywords: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    extra_metatag: {\n        type: String\n    },\n    // Publish / Draft\n    status: {\n        type: String,\n        enum: [\n            \"draft\",\n            \"published\"\n        ],\n        default: \"draft\"\n    }\n}, {\n    timestamps: true\n});\nblogSchema.index({\n    slug: 1\n}, {\n    unique: true\n});\nconst BLOG = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Blog || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Blog\", blogSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BLOG);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9ibG9nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjtBQUNHO0FBRTdCLE1BQU1HLGFBQWEsSUFBSUgsd0RBQWUsQ0FBQztJQUNuQ0ssT0FBTztRQUNISixNQUFNSztRQUNOQyxTQUFTO0lBQ2I7SUFFQUMsT0FBTztRQUNIUCxNQUFNSztRQUNOQyxTQUFTO0lBQ2I7SUFFQSxzREFBc0Q7SUFFdERFLGNBQWM7UUFDVlIsTUFBTUs7SUFDVjtJQUVBSSxhQUFhO1FBQ1RULE1BQU1LO1FBQ05DLFNBQVM7SUFDYjtJQUVBSSxNQUFNO1FBQ0ZWLE1BQU1LO1FBQ05NLFVBQVU7UUFDVkMsUUFBUTtJQUNaO0lBRUFDLFdBQVc7UUFDUGIsTUFBTUs7UUFDTlMsV0FBVztJQUNmO0lBRUFDLGlCQUFpQjtRQUNiZixNQUFNSztRQUNOUyxXQUFXO0lBQ2Y7SUFFQUUsY0FBYztRQUNWaEIsTUFBTTtZQUFDSztTQUFPO1FBQ2RZLFNBQVMsRUFBRTtJQUNmO0lBRUFDLGVBQWU7UUFDWGxCLE1BQU1LO0lBQ1Y7SUFFQSxrQkFBa0I7SUFDbEJjLFFBQVE7UUFDSm5CLE1BQU1LO1FBQ05lLE1BQU07WUFBQztZQUFTO1NBQVk7UUFDNUJILFNBQVM7SUFDYjtBQUNKLEdBQUc7SUFBRUksWUFBWTtBQUFLO0FBRXRCbkIsV0FBV29CLEtBQUssQ0FBQztJQUFFWixNQUFNO0FBQUUsR0FBRztJQUFFRSxRQUFRO0FBQUs7QUFDN0MsTUFBTVcsT0FBT3hCLHdEQUFlLENBQUMwQixJQUFJLElBQUkxQixxREFBYyxDQUFDLFFBQVFHO0FBRTVELGlFQUFlcUIsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2d1amFyYXQtdGF4aS8uL3NyYy9hcHAvbW9kZWxzL2Jsb2cuanM/NTJkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IHR5cGUgfSBmcm9tIFwib3NcIjtcclxuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwidXRpbFwiO1xyXG5cclxuY29uc3QgYmxvZ1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlOiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZWQgdG8gZGVsZXRlIGltYWdlIGluIGNsb3VkaW5hcnkgd2hlbiBkZWxldGUgYm9sZ1xyXG5cclxuICAgIGltZ19wdWJsaWNJZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcblxyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBzbHVnOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRhVGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiA2MCxcclxuICAgIH0sXHJcblxyXG4gICAgbWV0YURlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIG1heGxlbmd0aDogMTYwLFxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRhS2V5d29yZHM6IHtcclxuICAgICAgICB0eXBlOiBbU3RyaW5nXSxcclxuICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgIH0sXHJcblxyXG4gICAgZXh0cmFfbWV0YXRhZzoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUHVibGlzaCAvIERyYWZ0XHJcbiAgICBzdGF0dXM6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZW51bTogW1wiZHJhZnRcIiwgXCJwdWJsaXNoZWRcIl0sXHJcbiAgICAgICAgZGVmYXVsdDogXCJkcmFmdFwiLFxyXG4gICAgfSxcclxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pXHJcblxyXG5ibG9nU2NoZW1hLmluZGV4KHsgc2x1ZzogMSB9LCB7IHVuaXF1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQkxPRyA9IG1vbmdvb3NlLm1vZGVscy5CbG9nIHx8IG1vbmdvb3NlLm1vZGVsKFwiQmxvZ1wiLCBibG9nU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJMT0ciXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ0eXBlIiwidHlwZXMiLCJibG9nU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJTdHJpbmciLCJyZXF1aXJlIiwiaW1hZ2UiLCJpbWdfcHVibGljSWQiLCJkZXNjcmlwdGlvbiIsInNsdWciLCJyZXF1aXJlZCIsInVuaXF1ZSIsIm1ldGFUaXRsZSIsIm1heGxlbmd0aCIsIm1ldGFEZXNjcmlwdGlvbiIsIm1ldGFLZXl3b3JkcyIsImRlZmF1bHQiLCJleHRyYV9tZXRhdGFnIiwic3RhdHVzIiwiZW51bSIsInRpbWVzdGFtcHMiLCJpbmRleCIsIkJMT0ciLCJtb2RlbHMiLCJCbG9nIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/blog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/cloudinary","vendor-chunks/q"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fblogs%2Froute&page=%2Fapi%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2Froute.js&appDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();