(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Lobster|Alfa+Slab+One|Inconsolata');\r\n\r\n::ng-deep :root{\r\n    --foreground:rgb(37, 255, 190);\r\n    --hover:rgb(117, 255, 221);\r\n    --bg-color-1:rgb(61, 61, 61,.8);\r\n    color:var(--foreground);\r\n    font-family: 'Inconsolata', monospace;\r\n}\r\n\r\nhtml\r\nbody{\r\n    margin:0%;\r\n    background-color:black;\r\n}\r\n\r\n#header{\r\n    background-color:var(--bg-color-1);\r\n    width: 100%;\r\n    height: 70px;\r\n    color:var(--bg-color-1);\r\n\r\n    display: flex;\r\n    text-align: center;\r\n    position: relative;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n\r\n    margin-top: 10px;\r\n}\r\n\r\n#logo{\r\n    /*background-color: var(--bg-color-1);*/\r\n    width:70px;\r\n    height:70px;\r\n    margin: 0%;\r\n    margin-left:2%;\r\n    display: flex;\r\n    text-align: center;\r\n    margin-top: 0px;\r\n    position: relative;\r\n}\r\n\r\n#logo a{\r\n   border-color: var(--foreground);\r\n   color: var(--foreground);\r\n    width:50px;\r\n    height:50px;\r\n    margin: 6px;\r\n    display:inline-block;\r\n    cursor: pointer;\r\n\r\n    border-style: solid;\r\n    border-width:4px;\r\n\r\n    font-size:50px;\r\n    vertical-align: middle;\r\n    line-height: 50px;\r\n    font-family: lobster;\r\n}\r\n\r\n#logo a:hover{\r\n    color:var(--hover);\r\n    border-color:var(--hover);\r\n    \r\n}\r\n\r\n.navbaritem{\r\nfloat:left;\r\nlist-style-type: none;\r\nmargin:0px;\r\n}\r\n\r\n.navbaritem li a{\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0px 16px;\r\n    text-decoration: none;\r\n    color:var(--foreground);\r\n    margin:0px;\r\n    line-height: 70px;\r\n    font-size:20px;\r\n    font-family: 'Alfa Slab One',cursive;\r\n    transition:line-height 1s ease;\r\n    /*transition:color 1s ease;*/\r\n}\r\n\r\n.navbaritem li a:hover{\r\n    color:var(--hover);\r\n    border-color:var(--hover);\r\n    border-bottom:var(--hover) solid 10px;\r\n    line-height: 60px;\r\n}\r\n\r\n.content-title{\r\n    margin:2%;\r\n    font-family: lobster;\r\n    background-color: var(--bg-color-1);\r\n    font-size: 160%;\r\n    display: inline-flex;\r\n}\r\n\r\n.content-title a {\r\n    padding: 10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<div id=\"header\">\n    <div id=\"logo\"><a routerLink='/'>A</a></div>\n  \n    <ul class=\"navbaritem\">\n      <li class=\"navbaritem\"><a routerLink=\"/projects\">Projects</a></li>\n      <li class=\"navbaritem\"><a routerLink=\"/contact\">Contact</a></li>\n    </ul>\n  </div>\n  <router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        //particles
        particlesJS.load('particles-js', './assets/particles.json', null);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.content-cont div{\r\n    background-color: var(--bg-color-1);\r\n    font-size:200%;\r\n    margin:5%;\r\n    padding:2%;\r\n}*/"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='content-cont'>\n  <div>\n  Please do not hesitate to reach out about any positions you are staffing, projects you need help with or web sites you need built.  I can be reached at:\n  </div>\n</div>\n<div class='content-cont'>\n    <div>\n    Alexander Cleasby:\n    </div>\n  </div>\n<div class=\"content-cont\">\n<div>E-Mail: cleasby.alex@gmail.com</div>\n<div>Phone: +1.202.374.9606</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name{\r\n    font-family: lobster;\r\n    background-color: var(--bg-color-1);\r\n    font-size: 200%;\r\n    display: inline-flex;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n.content-cont{\r\n    width:90%;\r\n    display:flex;\r\n    justify-content: center;\r\n    margin:5%;\r\n}\r\n.name a{\r\n    padding: 10px 20px;\r\n}\r\n.greeting{\r\n    background-color: var(--bg-color-1);\r\n    font-size:120%;\r\n    padding:2%;\r\n}\r\n.text-box{\r\n    background-color:var(--bg-color-1);\r\n    padding: 2%;\r\n}"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='content-cont'>\r\n  <div class='name'>\r\n    <a>Alexander Cleasby</a>\r\n  </div>\r\n</div>\r\n<div class='content-cont'>\r\n  <div class='greeting'>\r\n    Hello, I am Alexander Cleasby I build web apps.\r\n  </div>\r\n</div>\r\n<div class='content-cont'>\r\n  <div class='text-box'>\r\n    Please take some time to have a look at some of my web development projects or reach out.\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project_list{\r\n    background-color: rgb(0,0,0,0);\r\n    width:97%;\r\n    list-style: none;\r\n    padding:0px;\r\n    \r\n}\r\n.project_list li{\r\n    background-color: rgb(0,0,0,0);\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    margin-bottom: 20px;\r\n    /*margin:10px;*/\r\n    \r\n}\r\n.card{\r\n    background-color: var(--bg-color-1);\r\n    min-width: 60%;\r\n    width:600px;\r\n    margin:20px;\r\n    display: block;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    -ms-grid-column-align: center;\r\n        justify-self: center;\r\n    \r\n}\r\n.card p{\r\n    padding:5%;\r\n    font-size:100%;\r\n}\r\n.project_title{\r\n    font-size: 200%;\r\n    color:var(--foreground);\r\n    text-align: center;\r\n    padding:5%;\r\n}\r\n.project_img{\r\n    width:170px;\r\n    max-width: 90%;\r\n    margin: 20px;\r\n    height:auto;\r\n    flex:1 1 auto;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='content-cont'>\n  <ul class=\"project_list\">\n    <li *ngFor=\"let project of Projects;\">\n        <img class=\"project_img\" src=\"{{project.pic}}\">\n      <div class=\"card\">\n      <a class=\"project_title\" href=\"{{project.Link}}\">{{ project.Name }}</a><br>\n      <p> {{ project.Desc }}</p>\n      \n      </div>\n      \n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.Projects = [
            { Name: 'DCbustracker', Desc: "DC bus tracker is a SPA that uses the user's location to find nearby bus stops and get expected arrival times for buses destined for that stop.  Built on the Ionic framework.  Employs Google Maps api to display stops.  Can be added to a Chrome user's homepage to operate like a native app.",
                Link: 'https://dcbustracker.com/', pic: '../assets/dcbustracker.com_ScreenGrab.png' },
            { Name: 'Web-Farkle',
                Desc: "Online multiplayer adaptation of folk dice game Farkle.  App is powered by Node and websockets." +
                    "  Supports multiple game rooms and players per game.  Hosted as a micro service oh Heroku.com",
                Link: 'https://web-farkle.herokuapp.com/', pic: '../assets/web-farkle.herokuapp.com_ScreenGrab.png' }
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cleas\Desktop\Portfolio\Frontend\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map