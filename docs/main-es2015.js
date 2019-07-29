(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n    <!-- <a class=\"navbar-brand\" style=\"width:50%;max-width:180px;\"><img style=\"width:100%;\"src=\"/assets/innoraft-logo.png\"></a> -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Worklog</a></li>\n    </ul>\n</nav>\n\n<div class=\"container\" style=\"margin-top: 20px;\">\n  \n\n  <div class=\"form-group\">\n    <label for=\"\" ><strong>Date : </strong></label>\n    <input type=\"date\" class=\"form-control\" placeholder=\"Date\" [(ngModel)]=\"date\">\n  </div>\n\n  <hr>\n  <strong style=\"margin-bottom:10px;\">Work Log Details : </strong>\n  <div class=\"center\">\n    <app-log *ngFor=\"let log of logs\" [log]=\"log\" (onDelete)=\"deleteLog($event)\"></app-log>\n  </div>\n  <hr>\n  <div class=\"row button-group\">\n    <div class=\"col-4\">\n      <button (click)=\"addLog()\" class=\"btn btn-primary btn-block\">Add Log</button>\n    </div>\n    <div class=\"col-4\">\n      <button (click)=\"generateLog()\" class=\"btn btn-success btn-block\">Generate</button>\n    </div>\n    <div class=\"col-4\">\n      <button (click)=\"clearLogs()\" class=\"btn btn-warning btn-block\">Clear</button>\n    </div>\n  </div>\n  \n  <app-log-view *ngIf=\"showLogs\" [logs]=\"logsDisplay\" [date]=\"date\" [totalHours]=\"totalHours\"></app-log-view>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/log-view/log-view.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/log-view/log-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:15px;text-align:center\">\n    <hr>\n    <h2>Work Log</h2>\n</div>\n\n<div class=\"table-view\">\n\n    <div style=\"margin-bottom:15px;\">\n        Date : {{date}}\n    </div>\n    <table class=\"table table-bordered\">\n        <thead class=\"thead-light\">\n            <tr>\n                <th>Project</th>\n                <th>Task Title</th>\n                <th>Task Link</th>\n                <th>Hours Spent</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let log of logs\">\n                <td>{{log.project}}</td>\n                <td>{{log.title}}</td>\n                <td><a href=\"{{log.link}}\">Link</a></td>\n                <td>{{log.hours}}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <div>Total Hours : {{totalHours}}</div>\n\n</div>\n\n<button class=\"btn btn-primary\" (click)=\"copyTable()\">Copy Table</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/log/log.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/log/log.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n    <div class=\"form-group flex-item\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Project\" [(ngModel)]=\"log.project\">\n    </div>\n    <div class=\"form-group flex-item\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Title (Task)\" [(ngModel)]=\"log.title\">\n    </div>\n    <div class=\"form-group flex-item\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Link (Task)\" [(ngModel)]=\"log.link\">\n    </div>\n    <div class=\"form-group flex-item\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Hours Spent\" [(ngModel)]=\"log.hours\">\n    </div>\n    <div class=\"form-group flex-item\">\n        <button class=\"btn btn-danger btn-block\" (click)=\"deleteLog(log.id)\">X</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-width-500 {\n  max-width: 500px;\n}\n\n.button-group {\n  background-color: #e9e8e8;\n  padding: 10px 0px;\n}\n\n.flex-container {\n  display: -webkit-box;\n  display: flex;\n}\n\n.flex-item {\n  -webkit-box-flex: 2;\n          flex-grow: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fya2EvaG9tZS9wcm9qZWN0cy9hbmd1bGFyL2lubm9yYWZ0LXdvcmtsb2cvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO1VBQUEsWUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC13aWR0aC01MDBcbiAgICBtYXgtd2lkdGg6IDUwMHB4XG5cbi5idXR0b24tZ3JvdXBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOGU4XG4gICAgcGFkZGluZzogMTBweCAwcHhcblxuLmZsZXgtY29udGFpbmVyXG4gICAgZGlzcGxheTogZmxleFxuXG4uZmxleC1pdGVtXG4gICAgZmxleC1ncm93OiAyIiwiLm1heC13aWR0aC01MDAge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uYnV0dG9uLWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZThlODtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICBmbGV4LWdyb3c6IDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.id = 1;
        this.logs = [];
        this.logsDisplay = [];
        this.showLogs = false;
    }
    addLog() {
        this.logs.push({ id: ++this.id, title: '', project: '', link: 'https://innoraft.atlassian.net/browse/', hours: null });
    }
    deleteLog(id) {
        let index = this.logs.findIndex((e) => { return e.id == id; });
        this.logs.splice(index, 1);
    }
    generateLog() {
        this.showLogs = true;
        this.logsDisplay = [];
        this.logsDisplay = [...this.logs];
        this.totalHours = 0;
        for (let index in this.logs) {
            this.totalHours += Number(this.logs[index].hours);
        }
        // console.log('Log : ', this.logs);
    }
    clearLogs() {
        this.showLogs = false;
        this.logsDisplay = [];
        this.logs = [];
        this.id = 1;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _log_view_log_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-view/log-view.component */ "./src/app/log-view/log-view.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _log_log_component__WEBPACK_IMPORTED_MODULE_5__["LogComponent"],
            _log_view_log_view_component__WEBPACK_IMPORTED_MODULE_6__["LogViewComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/log-view/log-view.component.sass":
/*!**************************************************!*\
  !*** ./src/app/log-view/log-view.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-view {\n  max-width: 500px;\n  margin: auto;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fya2EvaG9tZS9wcm9qZWN0cy9hbmd1bGFyL2lubm9yYWZ0LXdvcmtsb2cvc3JjL2FwcC9sb2ctdmlldy9sb2ctdmlldy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbG9nLXZpZXcvbG9nLXZpZXcuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9nLXZpZXcvbG9nLXZpZXcuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtdmlld1xuICAgIG1heC13aWR0aCA6IDUwMHB4XG4gICAgbWFyZ2luOiBhdXRvXG4gICAgbWFyZ2luLXRvcCA6IDIwcHgiLCIudGFibGUtdmlldyB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/log-view/log-view.component.ts":
/*!************************************************!*\
  !*** ./src/app/log-view/log-view.component.ts ***!
  \************************************************/
/*! exports provided: LogViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogViewComponent", function() { return LogViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogViewComponent = class LogViewComponent {
    constructor() {
    }
    ngOnInit() {
    }
    copyTable() {
        console.log('Copying');
        let table = document.getElementsByClassName('table-view')[0];
        console.log('Table : ', table);
        let range = document.createRange();
        console.log('Range : ', range);
        range.selectNode(table);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        console.log('Done');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LogViewComponent.prototype, "logs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LogViewComponent.prototype, "totalHours", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LogViewComponent.prototype, "date", void 0);
LogViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-view',
        template: __webpack_require__(/*! raw-loader!./log-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/log-view/log-view.component.html"),
        styles: [__webpack_require__(/*! ./log-view.component.sass */ "./src/app/log-view/log-view.component.sass")]
    })
], LogViewComponent);



/***/ }),

/***/ "./src/app/log/log.component.sass":
/*!****************************************!*\
  !*** ./src/app/log/log.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".same-width {\n  width: 19%;\n  display: inline-block;\n  margin-right: 1%;\n}\n\n.flex-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: space-between;\n}\n\n.flex-item {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fya2EvaG9tZS9wcm9qZWN0cy9hbmd1bGFyL2lubm9yYWZ0LXdvcmtsb2cvc3JjL2FwcC9sb2cvbG9nLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9sb2cvbG9nLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7VUFBQSxZQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9sb2cvbG9nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbWUtd2lkdGhcbiAgICB3aWR0aCA6IDE5JVxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIG1hcmdpbi1yaWdodDogMSVcblxuLmZsZXgtY29udGFpbmVyXG4gICAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlblxuXG4uZmxleC1pdGVtXG4gICAgZmxleC1ncm93OjEiLCIuc2FtZS13aWR0aCB7XG4gIHdpZHRoOiAxOSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mbGV4LWl0ZW0ge1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/log/log.component.ts":
/*!**************************************!*\
  !*** ./src/app/log/log.component.ts ***!
  \**************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let LogComponent = class LogComponent {
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('Log : ', this.log);
    }
    deleteLog(id) {
        this.onDelete.emit(id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LogComponent.prototype, "log", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LogComponent.prototype, "onDelete", void 0);
LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log',
        template: __webpack_require__(/*! raw-loader!./log.component.html */ "./node_modules/raw-loader/index.js!./src/app/log/log.component.html"),
        styles: [__webpack_require__(/*! ./log.component.sass */ "./src/app/log/log.component.sass")]
    })
], LogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arka/home/projects/angular/innoraft-worklog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map