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
exports.id = "app/api/send-booking/route";
exports.ids = ["app/api/send-booking/route"];
exports.modules = {

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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

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

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

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

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-booking%2Froute&page=%2Fapi%2Fsend-booking%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-booking%2Froute.ts&appDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-booking%2Froute&page=%2Fapi%2Fsend-booking%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-booking%2Froute.ts&appDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_orins_tech_Gujarat_Taxi_Gujarat_Taxi_src_app_api_send_booking_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/send-booking/route.ts */ \"(rsc)/./src/app/api/send-booking/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-booking/route\",\n        pathname: \"/api/send-booking\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-booking/route\"\n    },\n    resolvedPagePath: \"D:\\\\orins tech\\\\Gujarat Taxi\\\\Gujarat Taxi\\\\src\\\\app\\\\api\\\\send-booking\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_orins_tech_Gujarat_Taxi_Gujarat_Taxi_src_app_api_send_booking_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-booking/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWJvb2tpbmclMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlbmQtYm9va2luZyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlbmQtYm9va2luZyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDb3JpbnMlMjB0ZWNoJTVDR3VqYXJhdCUyMFRheGklNUNHdWphcmF0JTIwVGF4aSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q29yaW5zJTIwdGVjaCU1Q0d1amFyYXQlMjBUYXhpJTVDR3VqYXJhdCUyMFRheGkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWphcmF0LXRheGkvP2E5YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcb3JpbnMgdGVjaFxcXFxHdWphcmF0IFRheGlcXFxcR3VqYXJhdCBUYXhpXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHNlbmQtYm9va2luZ1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZC1ib29raW5nL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZC1ib29raW5nXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZW5kLWJvb2tpbmcvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxvcmlucyB0ZWNoXFxcXEd1amFyYXQgVGF4aVxcXFxHdWphcmF0IFRheGlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcc2VuZC1ib29raW5nXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NlbmQtYm9va2luZy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-booking%2Froute&page=%2Fapi%2Fsend-booking%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-booking%2Froute.ts&appDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/send-booking/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/send-booking/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./src/app/lib/db.js\");\n/* harmony import */ var _app_models_BookingCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/models/BookingCounter */ \"(rsc)/./src/app/models/BookingCounter.js\");\n\n\n\n\nasync function generateBookingId() {\n    // Connect to database\n    await (0,_app_lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    // Get current date\n    const now = new Date();\n    const monthNames = [\n        \"Jan\",\n        \"Feb\",\n        \"Mar\",\n        \"Apr\",\n        \"May\",\n        \"Jun\",\n        \"Jul\",\n        \"Aug\",\n        \"Sep\",\n        \"Oct\",\n        \"Nov\",\n        \"Dec\"\n    ];\n    const monthName = monthNames[now.getMonth()];\n    const year = now.getFullYear();\n    const monthKey = `${monthName}-${year}`;\n    // Use findOneAndUpdate for atomic increment (prevents race conditions)\n    // If document doesn't exist, create it with sequence = 0, then increment to 1\n    // If it exists, increment the sequence\n    const counter = await _app_models_BookingCounter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOneAndUpdate({\n        month: monthKey\n    }, {\n        $inc: {\n            sequence: 1\n        },\n        $setOnInsert: {\n            month: monthKey,\n            year: year\n        }\n    }, {\n        upsert: true,\n        new: true,\n        setDefaultsOnInsert: true\n    });\n    // Generate booking ID with 6-digit padded sequence\n    const sequenceStr = counter.sequence.toString().padStart(6, \"0\");\n    const bookingId = `${monthName}-${sequenceStr}`;\n    return bookingId;\n}\nasync function POST(request) {\n    try {\n        const { tripType, from, to, date, time, passengers, carType, phone } = await request.json();\n        // Generate sequential month-based booking ID\n        const bookingId = await generateBookingId();\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            host: \"smtp-relay.brevo.com\",\n            port: 587,\n            auth: {\n                user: \"988651001@smtp-brevo.com\",\n                pass: \"OkNKMU06w7Zrj9Eh\"\n            }\n        });\n        // Email content\n        const emailSubject = `New Booking - ${bookingId} - Gujarat Taxi`;\n        const emailHtml = `\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <title>New Booking - Gujarat Taxi</title>\n          <style>\n            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }\n            .container { max-width: 600px; margin: 0 auto; padding: 20px; }\n            .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }\n            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }\n            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }\n            .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 10px; background: #f3f4f6; border-radius: 5px; }\n            .label { font-weight: bold; color: #374151; }\n            .value { color: #6b7280; }\n            .booking-id { background: #f97316; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; margin: 20px 0; }\n            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }\n          </style>\n        </head>\n        <body>\n          <div class=\"container\">\n            <div class=\"header\">\n              <h1>🚖 New Booking - Gujarat Taxi</h1>\n              <p>Khushboo Gujarat Ki</p>\n            </div>\n\n            <div class=\"content\">\n              <div class=\"booking-id\">\n                Booking ID: ${bookingId}\n              </div>\n\n              <div class=\"booking-details\">\n                <h2>Customer Information</h2>\n                <div class=\"detail-row\">\n                  <span class=\"label\">Number is :</span>\n                  <span class=\"value\">${phone}</span>\n                </div>\n\n              </div>\n\n              <div class=\"booking-details\">\n                <h2>Trip Details</h2>\n                <div class=\"detail-row\">\n                  <span class=\"label\">Trip Type:</span>\n                  <span class=\"value\">${tripType.charAt(0).toUpperCase() + tripType.slice(1).replace(\"-\", \" \")}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">From:</span>\n                  <span class=\"value\">${from}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">To:</span>\n                  <span class=\"value\">${to}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">Date:</span>\n                  <span class=\"value\">${new Date(date).toLocaleDateString(\"en-IN\")}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">Time:</span>\n                  <span class=\"value\">${time}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">Passengers:</span>\n                  <span class=\"value\">${passengers}</span>\n                </div>\n                <div class=\"detail-row\">\n                  <span class=\"label\">Car Type:</span>\n                  <span class=\"value\">${carType.charAt(0).toUpperCase() + carType.slice(1)}</span>\n                </div>\n              </div>\n\n              <div class=\"footer\">\n                <p>This booking was submitted through the Gujarat Taxi website.</p>\n                <p>Please contact the customer to confirm the booking details.</p>\n                <p><strong>Gujarat Taxi</strong> - Owned & managed by Wolfron Technologies LLP</p>\n              </div>\n            </div>\n          </div>\n        </body>\n      </html>\n    `;\n        const emailText = `\nNew Booking - ${bookingId} - Gujarat Taxi\n\nCustomer Information:\n- Number is: ${phone}\n\nTrip Details:\n- Trip Type: ${tripType}\n- From: ${from}\n- To: ${to}\n- Date: ${date}\n- Time: ${time}\n- Passengers: ${passengers}\n- Car Type: ${carType}\n\nPlease contact the customer to confirm the booking details.\n\nGujarat Taxi - Owned & managed by Wolfron Technologies LLP\n    `;\n        // Send email\n        await transporter.sendMail({\n            from: `\"${bookingId}\" <pgvaghela07@gmail.com>`,\n            to: \"tripeaz25@gmail.com\",\n            subject: emailSubject,\n            text: emailText,\n            html: emailHtml\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true,\n            bookingId: bookingId,\n            message: \"Booking submitted successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error sending booking email:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: false,\n            message: \"Failed to submit booking\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUosVUFBVSx5QkFBeUIsQ0FBQztZQUM5Q0ssSUFBSTtZQUNKdUIsU0FBU1Q7WUFDVFUsTUFBTUg7WUFDTkksTUFBTVY7UUFDUjtRQUdBLE9BQU83QyxrRkFBWUEsQ0FBQ29DLElBQUksQ0FBQztZQUN2Qm9CLFNBQVM7WUFDVC9CLFdBQVdBO1lBQ1hnQyxTQUFTO1FBQ1g7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBTzFELGtGQUFZQSxDQUFDb0MsSUFBSSxDQUN0QjtZQUFFb0IsU0FBUztZQUFPQyxTQUFTO1FBQTJCLEdBQ3REO1lBQUVHLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VqYXJhdC10YXhpLy4vc3JjL2FwcC9hcGkvc2VuZC1ib29raW5nL3JvdXRlLnRzPzRiYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIkAvYXBwL2xpYi9kYlwiO1xuaW1wb3J0IEJvb2tpbmdDb3VudGVyIGZyb20gXCJAL2FwcC9tb2RlbHMvQm9va2luZ0NvdW50ZXJcIjtcblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQm9va2luZ0lkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIC8vIENvbm5lY3QgdG8gZGF0YWJhc2VcbiAgYXdhaXQgY29ubmVjdERCKCk7XG5cbiAgLy8gR2V0IGN1cnJlbnQgZGF0ZVxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtb250aE5hbWVzID0gW1xuICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsXG4gICAgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIlxuICBdO1xuXG4gIGNvbnN0IG1vbnRoTmFtZSA9IG1vbnRoTmFtZXNbbm93LmdldE1vbnRoKCldO1xuICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoS2V5ID0gYCR7bW9udGhOYW1lfS0ke3llYXJ9YDtcblxuICAvLyBVc2UgZmluZE9uZUFuZFVwZGF0ZSBmb3IgYXRvbWljIGluY3JlbWVudCAocHJldmVudHMgcmFjZSBjb25kaXRpb25zKVxuICAvLyBJZiBkb2N1bWVudCBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgd2l0aCBzZXF1ZW5jZSA9IDAsIHRoZW4gaW5jcmVtZW50IHRvIDFcbiAgLy8gSWYgaXQgZXhpc3RzLCBpbmNyZW1lbnQgdGhlIHNlcXVlbmNlXG4gIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCBCb29raW5nQ291bnRlci5maW5kT25lQW5kVXBkYXRlKFxuICAgIHsgbW9udGg6IG1vbnRoS2V5IH0sXG4gICAge1xuICAgICAgJGluYzogeyBzZXF1ZW5jZTogMSB9LFxuICAgICAgJHNldE9uSW5zZXJ0OiB7IFxuICAgICAgICBtb250aDogbW9udGhLZXksXG4gICAgICAgIHllYXI6IHllYXIgXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdXBzZXJ0OiB0cnVlLCAvLyBDcmVhdGUgaWYgZG9lc24ndCBleGlzdFxuICAgICAgbmV3OiB0cnVlLCAvLyBSZXR1cm4gdXBkYXRlZCBkb2N1bWVudFxuICAgICAgc2V0RGVmYXVsdHNPbkluc2VydDogdHJ1ZSxcbiAgICB9XG4gICk7XG5cbiAgLy8gR2VuZXJhdGUgYm9va2luZyBJRCB3aXRoIDYtZGlnaXQgcGFkZGVkIHNlcXVlbmNlXG4gIGNvbnN0IHNlcXVlbmNlU3RyID0gY291bnRlci5zZXF1ZW5jZS50b1N0cmluZygpLnBhZFN0YXJ0KDYsIFwiMFwiKTtcbiAgY29uc3QgYm9va2luZ0lkID0gYCR7bW9udGhOYW1lfS0ke3NlcXVlbmNlU3RyfWA7XG5cbiAgcmV0dXJuIGJvb2tpbmdJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICB0cmlwVHlwZSxcbiAgICAgIGZyb20sXG4gICAgICB0byxcbiAgICAgIGRhdGUsXG4gICAgICB0aW1lLFxuICAgICAgcGFzc2VuZ2VycyxcbiAgICAgIGNhclR5cGUsXG4gICAgICBwaG9uZSxcbiAgICB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICAvLyBHZW5lcmF0ZSBzZXF1ZW50aWFsIG1vbnRoLWJhc2VkIGJvb2tpbmcgSURcbiAgICBjb25zdCBib29raW5nSWQgPSBhd2FpdCBnZW5lcmF0ZUJvb2tpbmdJZCgpO1xuXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICBob3N0OiBcInNtdHAtcmVsYXkuYnJldm8uY29tXCIsXG4gICAgICBwb3J0OiA1ODcsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IFwiOTg4NjUxMDAxQHNtdHAtYnJldm8uY29tXCIsXG4gICAgICAgIHBhc3M6IFwiT2tOS01VMDZ3N1pyajlFaFwiLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBFbWFpbCBjb250ZW50XG4gICAgY29uc3QgZW1haWxTdWJqZWN0ID0gYE5ldyBCb29raW5nIC0gJHtib29raW5nSWR9IC0gR3VqYXJhdCBUYXhpYDtcblxuICAgIGNvbnN0IGVtYWlsSHRtbCA9IGBcbiAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgICAgICAgIDx0aXRsZT5OZXcgQm9va2luZyAtIEd1amFyYXQgVGF4aTwvdGl0bGU+XG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgYm9keSB7IGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbGluZS1oZWlnaHQ6IDEuNjsgY29sb3I6ICMzMzM7IH1cbiAgICAgICAgICAgIC5jb250YWluZXIgeyBtYXgtd2lkdGg6IDYwMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMjBweDsgfVxuICAgICAgICAgICAgLmhlYWRlciB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOTczMTYgMCUsICNlYTU4MGMgMTAwJSk7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDsgfVxuICAgICAgICAgICAgLmNvbnRlbnQgeyBiYWNrZ3JvdW5kOiAjZjlmYWZiOyBwYWRkaW5nOiAzMHB4OyBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4OyB9XG4gICAgICAgICAgICAuYm9va2luZy1kZXRhaWxzIHsgYmFja2dyb3VuZDogd2hpdGU7IHBhZGRpbmc6IDIwcHg7IGJvcmRlci1yYWRpdXM6IDhweDsgbWFyZ2luOiAyMHB4IDA7IH1cbiAgICAgICAgICAgIC5kZXRhaWwtcm93IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW46IDEwcHggMDsgcGFkZGluZzogMTBweDsgYmFja2dyb3VuZDogI2YzZjRmNjsgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gICAgICAgICAgICAubGFiZWwgeyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMzNzQxNTE7IH1cbiAgICAgICAgICAgIC52YWx1ZSB7IGNvbG9yOiAjNmI3MjgwOyB9XG4gICAgICAgICAgICAuYm9va2luZy1pZCB7IGJhY2tncm91bmQ6ICNmOTczMTY7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMTVweDsgYm9yZGVyLXJhZGl1czogOHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbjogMjBweCAwOyB9XG4gICAgICAgICAgICAuZm9vdGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAzMHB4OyBjb2xvcjogIzZiNzI4MDsgZm9udC1zaXplOiAxNHB4OyB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMT7wn5qWIE5ldyBCb29raW5nIC0gR3VqYXJhdCBUYXhpPC9oMT5cbiAgICAgICAgICAgICAgPHA+S2h1c2hib28gR3VqYXJhdCBLaTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9va2luZy1pZFwiPlxuICAgICAgICAgICAgICAgIEJvb2tpbmcgSUQ6ICR7Ym9va2luZ0lkfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9va2luZy1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGgyPkN1c3RvbWVyIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPk51bWJlciBpcyA6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiR7cGhvbmV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29raW5nLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8aDI+VHJpcCBEZXRhaWxzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlRyaXAgVHlwZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+JHt0cmlwVHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICB0cmlwVHlwZS5zbGljZSgxKS5yZXBsYWNlKFwiLVwiLCBcIiBcIilcbiAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Gcm9tOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ke2Zyb219PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+VG86PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPiR7dG99PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+RGF0ZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+JHtuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgIFwiZW4tSU5cIlxuICAgICAgKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5UaW1lOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ke3RpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+UGFzc2VuZ2Vyczo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+JHtwYXNzZW5nZXJzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNhciBUeXBlOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ke2NhclR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjYXJUeXBlLnNsaWNlKDEpXG4gICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBib29raW5nIHdhcyBzdWJtaXR0ZWQgdGhyb3VnaCB0aGUgR3VqYXJhdCBUYXhpIHdlYnNpdGUuPC9wPlxuICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBjb250YWN0IHRoZSBjdXN0b21lciB0byBjb25maXJtIHRoZSBib29raW5nIGRldGFpbHMuPC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+R3VqYXJhdCBUYXhpPC9zdHJvbmc+IC0gT3duZWQgJiBtYW5hZ2VkIGJ5IFdvbGZyb24gVGVjaG5vbG9naWVzIExMUDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIGA7XG5cbiAgICBjb25zdCBlbWFpbFRleHQgPSBgXG5OZXcgQm9va2luZyAtICR7Ym9va2luZ0lkfSAtIEd1amFyYXQgVGF4aVxuXG5DdXN0b21lciBJbmZvcm1hdGlvbjpcbi0gTnVtYmVyIGlzOiAke3Bob25lfVxuXG5UcmlwIERldGFpbHM6XG4tIFRyaXAgVHlwZTogJHt0cmlwVHlwZX1cbi0gRnJvbTogJHtmcm9tfVxuLSBUbzogJHt0b31cbi0gRGF0ZTogJHtkYXRlfVxuLSBUaW1lOiAke3RpbWV9XG4tIFBhc3NlbmdlcnM6ICR7cGFzc2VuZ2Vyc31cbi0gQ2FyIFR5cGU6ICR7Y2FyVHlwZX1cblxuUGxlYXNlIGNvbnRhY3QgdGhlIGN1c3RvbWVyIHRvIGNvbmZpcm0gdGhlIGJvb2tpbmcgZGV0YWlscy5cblxuR3VqYXJhdCBUYXhpIC0gT3duZWQgJiBtYW5hZ2VkIGJ5IFdvbGZyb24gVGVjaG5vbG9naWVzIExMUFxuICAgIGA7XG5cblxuXG4gICAgLy8gU2VuZCBlbWFpbFxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgIGZyb206IGBcIiR7Ym9va2luZ0lkfVwiIDxwZ3ZhZ2hlbGEwN0BnbWFpbC5jb20+YCwgXG4gICAgICB0bzogXCJ0cmlwZWF6MjVAZ21haWwuY29tXCIsXG4gICAgICBzdWJqZWN0OiBlbWFpbFN1YmplY3QsXG4gICAgICB0ZXh0OiBlbWFpbFRleHQsXG4gICAgICBodG1sOiBlbWFpbEh0bWwsXG4gICAgfSk7XG5cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgYm9va2luZ0lkOiBib29raW5nSWQsXG4gICAgICBtZXNzYWdlOiBcIkJvb2tpbmcgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIGJvb2tpbmcgZW1haWw6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkZhaWxlZCB0byBzdWJtaXQgYm9va2luZ1wiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJub2RlbWFpbGVyIiwiY29ubmVjdERCIiwiQm9va2luZ0NvdW50ZXIiLCJnZW5lcmF0ZUJvb2tpbmdJZCIsIm5vdyIsIkRhdGUiLCJtb250aE5hbWVzIiwibW9udGhOYW1lIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aEtleSIsImNvdW50ZXIiLCJmaW5kT25lQW5kVXBkYXRlIiwibW9udGgiLCIkaW5jIiwic2VxdWVuY2UiLCIkc2V0T25JbnNlcnQiLCJ1cHNlcnQiLCJuZXciLCJzZXREZWZhdWx0c09uSW5zZXJ0Iiwic2VxdWVuY2VTdHIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwiYm9va2luZ0lkIiwiUE9TVCIsInJlcXVlc3QiLCJ0cmlwVHlwZSIsImZyb20iLCJ0byIsImRhdGUiLCJ0aW1lIiwicGFzc2VuZ2VycyIsImNhclR5cGUiLCJwaG9uZSIsImpzb24iLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0IiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiZW1haWxTdWJqZWN0IiwiZW1haWxIdG1sIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2UiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJlbWFpbFRleHQiLCJzZW5kTWFpbCIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/send-booking/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/db.js":
/*!***************************!*\
  !*** ./src/app/lib/db.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        // Check if already connected\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n            return; // Already connected\n        }\n        // Check if connection is in progress\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 2) {\n            // Wait for connection to complete\n            await new Promise((resolve)=>{\n                mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.once(\"connected\", resolve);\n            });\n            return;\n        }\n        // Connect to database\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/gujrat_taxi\");\n        console.log(\"Database Connected\");\n    } catch (error) {\n        console.log(\"Error in DB Connect\", error.message);\n        throw error;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsWUFBWTtJQUNkLElBQUk7UUFDQSw2QkFBNkI7UUFDN0IsSUFBSUQsNERBQW1CLENBQUNHLFVBQVUsS0FBSyxHQUFHO1lBQ3RDLFFBQVEsb0JBQW9CO1FBQ2hDO1FBRUEscUNBQXFDO1FBQ3JDLElBQUlILDREQUFtQixDQUFDRyxVQUFVLEtBQUssR0FBRztZQUN0QyxrQ0FBa0M7WUFDbEMsTUFBTSxJQUFJQyxRQUFRLENBQUNDO2dCQUNmTCwwREFBbUIsQ0FBQ00sSUFBSSxDQUFDLGFBQWFEO1lBQzFDO1lBQ0E7UUFDSjtRQUVBLHNCQUFzQjtRQUN0QixNQUFNTCx1REFBZ0IsQ0FBQztRQUN2QlEsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCLEVBQUUsT0FBT0MsT0FBTztRQUNaRixRQUFRQyxHQUFHLENBQUMsdUJBQXVCQyxNQUFNQyxPQUFPO1FBQ2hELE1BQU1EO0lBQ1Y7QUFDSjtBQUVBLGlFQUFlVCxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VqYXJhdC10YXhpLy4vc3JjL2FwcC9saWIvZGIuanM/MTQ3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICAvLyBDaGVjayBpZiBhbHJlYWR5IGNvbm5lY3RlZFxuICAgICAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIEFscmVhZHkgY29ubmVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBjb25uZWN0aW9uIGlzIGluIHByb2dyZXNzXG4gICAgICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIGNvbm5lY3Rpb24gdG8gY29tcGxldGVcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbmNlKFwiY29ubmVjdGVkXCIsIHJlc29sdmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25uZWN0IHRvIGRhdGFiYXNlXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2d1anJhdF90YXhpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIENvbm5lY3RlZFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIERCIENvbm5lY3RcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uY2UiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/BookingCounter.js":
/*!******************************************!*\
  !*** ./src/app/models/BookingCounter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst bookingCounterSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    month: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    sequence: {\n        type: Number,\n        required: true,\n        default: 0,\n        min: 0\n    },\n    year: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n// Index for fast lookups by month and year\nbookingCounterSchema.index({\n    month: 1,\n    year: 1\n}, {\n    unique: true\n});\nconst BookingCounter = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).BookingCounter || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"BookingCounter\", bookingCounterSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingCounter);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9Cb29raW5nQ291bnRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsdUJBQXVCLElBQUlELHdEQUFlLENBQUM7SUFDL0NHLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFDQUMsVUFBVTtRQUNSSixNQUFNSztRQUNOSCxVQUFVO1FBQ1ZJLFNBQVM7UUFDVEMsS0FBSztJQUNQO0lBQ0FDLE1BQU07UUFDSlIsTUFBTUs7UUFDTkgsVUFBVTtJQUNaO0FBQ0YsR0FBRztJQUFFTyxZQUFZO0FBQUs7QUFFdEIsMkNBQTJDO0FBQzNDWixxQkFBcUJhLEtBQUssQ0FBQztJQUFFWCxPQUFPO0lBQUdTLE1BQU07QUFBRSxHQUFHO0lBQUVMLFFBQVE7QUFBSztBQUVqRSxNQUFNUSxpQkFDSmYsd0RBQWUsQ0FBQ2UsY0FBYyxJQUM5QmYscURBQWMsQ0FBQyxrQkFBa0JDO0FBRW5DLGlFQUFlYyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VqYXJhdC10YXhpLy4vc3JjL2FwcC9tb2RlbHMvQm9va2luZ0NvdW50ZXIuanM/YjM5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGJvb2tpbmdDb3VudGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG1vbnRoOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgfSxcbiAgc2VxdWVuY2U6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogMCxcbiAgICBtaW46IDAsXG4gIH0sXG4gIHllYXI6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5cbi8vIEluZGV4IGZvciBmYXN0IGxvb2t1cHMgYnkgbW9udGggYW5kIHllYXJcbmJvb2tpbmdDb3VudGVyU2NoZW1hLmluZGV4KHsgbW9udGg6IDEsIHllYXI6IDEgfSwgeyB1bmlxdWU6IHRydWUgfSk7XG5cbmNvbnN0IEJvb2tpbmdDb3VudGVyID1cbiAgbW9uZ29vc2UubW9kZWxzLkJvb2tpbmdDb3VudGVyIHx8XG4gIG1vbmdvb3NlLm1vZGVsKFwiQm9va2luZ0NvdW50ZXJcIiwgYm9va2luZ0NvdW50ZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ291bnRlcjtcblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiYm9va2luZ0NvdW50ZXJTY2hlbWEiLCJTY2hlbWEiLCJtb250aCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInNlcXVlbmNlIiwiTnVtYmVyIiwiZGVmYXVsdCIsIm1pbiIsInllYXIiLCJ0aW1lc3RhbXBzIiwiaW5kZXgiLCJCb29raW5nQ291bnRlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/BookingCounter.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-booking%2Froute&page=%2Fapi%2Fsend-booking%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-booking%2Froute.ts&appDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Corins%20tech%5CGujarat%20Taxi%5CGujarat%20Taxi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();