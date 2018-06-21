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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p  style=\"text-align:center\">\n  Created By: Om Prakash Saini\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    background-color: #04192e;\r\n    display: block;\r\n    padding: 3%;\r\n    color: white;\r\n    font-size: 26px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n    <div class=\"container\">\n        <div class=\"row header\">\n            <div class=\"col-md-12\">\n                <a style=\"color:white\">Fire and Ice</a>\n            </div>\n        </div>\n\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n                </div>\n                <!-- Collect the nav links, forms and other content for toggling-->\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav\">\n                        <li><a [routerLink]=\"['home']\">Home</a></li>\n                        <li><a [routerLink]=\"['about']\">About</a></li>\n                    </ul>\n                </div>\n                <!-- /.navbar-collapse-->\n            </div>\n            <!-- /.container-fluid-->\n        </nav>\n\n    </div>\n</div>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _fire_ice_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fire-ice-http.service */ "./src/app/fire-ice-http.service.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//router module used for application level routes


//modal







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]
            ],
            imports: [
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: "", redirectTo: 'home', pathMatch: 'full' },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] }
                ])
            ],
            entryComponents: [_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]],
            providers: [_fire_ice_http_service__WEBPACK_IMPORTED_MODULE_8__["FireIceHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);\r\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 *ngIf=\"data.name\"style=\"font-family:'Poppins', sans-serif\" mat-dialog-title>{{data.name}}</h2>\n  <h2 *ngIf=\"!data.name\"style=\"font-family:'Poppins', sans-serif\" mat-dialog-title>{{data.aliases}}</h2>\n  <hr>\n  <mat-dialog-content>\n      <div *ngIf=\"(data.url.indexOf('characters')>0)\">\n        <p style=\"font-family: 'Source Sans Pro', sans-serif\">\n         Aliases: {{data.aliases}}<br>\n         Allegiances: {{data.allegiances}}<br>\n         Books: {{data.Books}}<br>\n         Born: {{data.born}}<br>\n         Culture: {{data.culture}}<br>\n         Died: {{data.died}}<br>\n         Father: {{data.father}}<br>\n         Gender: {{data.gender}}<br>\n         Mother: {{data.mother}}<br>\n         Played By: {{data.playedBy}}<br>\n         POV Books: {{data.books}}<br>\n         Spouse: {{data.spouse}}<br>\n         Titles: {{data.titles}}<br>\n        </p><br>\n        <strong>TV Series: {{data.tvSeries}}</strong>\n      </div>\n      <div *ngIf=\"(data.url.indexOf('houses')>0)\" >\n        <p style=\"font-family: 'Source Sans Pro', sans-serif\">\n          Ancestral Weapons: {{data.ancestralWeapons}}<br>\n          Cadet Branches: {{data.cadetBranches}}<br>\n          Coat Of Arms: {{data.coatOfArms}}<br>\n          Current Lord: {{data.currentLord}}<br>\n          Died Out: {{data.diedOut}}<br>\n          Founded: {{data.founded}}<br>\n          Founder: {{data.founder}}<br>\n          Heir: {{data.heir}}<br>\n          Over Lord: {{data.overlord}}<br>\n          Region: {{data.region}}<br>\n          Seats: {{data.seats}}<br>\n          Sworn Members: {{data.swornMembers}}<br>\n          Titles: {{data.titles}}<br>\n        </p><br>\n        <strong>Words: {{data.words}}</strong>\n      </div>\n      <div *ngIf=\"(data.url.indexOf('books')>0)\">\n        <p style=\"font-family: 'Source Sans Pro', sans-serif\">\n          ISBN: {{data.isbn}}<br>\n          Country: {{data.country}}<br>\n          Characters: {{data.characters}}<br>\n          Authors: {{data.authors}}<br>\n          Media Type: {{data.mediaType}}<br>\n          Number Of Pages: {{data.numberOfPages}}<br>\n          POV Characters: {{data.povCharacters}}<br>\n          Released: {{data.released}}<br>\n        </p><br>\n        <strong>Publisher:{{data.publisher}}</strong>\n      </div>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n      <button (click)=\"onCloseConfirm()\">Close</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
    };
    DetailsComponent.prototype.onCloseConfirm = function () {
        this.dialogRef.close();
    };
    DetailsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/fire-ice-http.service.ts":
/*!******************************************!*\
  !*** ./src/app/fire-ice-http.service.ts ***!
  \******************************************/
/*! exports provided: FireIceHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireIceHttpService", function() { return FireIceHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing httpclient to make the requests

var FireIceHttpService = /** @class */ (function () {
    function FireIceHttpService(_http) {
        this._http = _http;
        this._everything = [];
    }
    FireIceHttpService.prototype.getEverything = function () {
        var category = ["books", "characters", "houses"];
        var no = [1, 43, 9]; //each category page no taking page size as 50
        var bookPromises = []; //will store the promise sent after making http request to the book api
        var characterPromises = []; //will store the promise sent after making http request to the character api
        var housePromises = []; //will store the promise sent after making http request to the houses api
        var everything = [];
        for (var i = 0; i < category.length; i++) {
            //run the loop for each category
            for (var j = 0; j < no[i]; j++) {
                //for each category run the loop as many times as its page no taking page size as 50
                if (i === 0) {
                    bookPromises.push(this._http.get("https://anapioficeandfire.com/api/" + category[i] + "?page=" + (j + 1) + "&pageSize=50")); //push each promise into the bookPromises array
                }
                if (i === 1) {
                    characterPromises.push(this._http.get("https://anapioficeandfire.com/api/" + category[i] + "?page=" + (j + 1) + "&pageSize=50")); //push each promise into the characterPromises array
                }
                if (i === 2) {
                    housePromises.push(this._http.get("https://anapioficeandfire.com/api/" + category[i] + "?page=" + (j + 1) + "&pageSize=50")); //push each promise into the housePromises array
                }
            } //end of inside for loop 
        } //end of the outer for loop
        Promise.all(bookPromises).then(function (data) {
            bookPromises.forEach(function (element) {
                element.forEach(function (_books) {
                    _books.forEach(function (book) {
                        everything.push(book);
                    });
                });
            });
        });
        Promise.all(characterPromises).then(function (data) {
            characterPromises.forEach(function (element) {
                element.forEach(function (_characters) {
                    _characters.forEach(function (character) {
                        everything.push(character);
                    });
                });
            });
        });
        Promise.all(housePromises).then(function (data) {
            housePromises.forEach(function (element) {
                element.forEach(function (_houses) {
                    _houses.forEach(function (house) {
                        everything.push(house);
                    });
                });
            });
        });
        this._everything = everything;
        return {
            everything: everything
        };
    };
    FireIceHttpService.prototype.viewInformation = function (url) {
        return this._http.get(url);
    };
    FireIceHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FireIceHttpService);
    return FireIceHttpService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top{\r\n    border-radius: 10px;\r\n    border-style: dashed;\r\n    border-color: white;\r\n    height: 25vh;\r\n}\r\n.card-title{\r\n    padding-top: 15px;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n    <div class=\"row\" style=\"text-align: center\">\n        <div class=\"col-md-12\" style=\"font-size: 22px\">Books, Characters & Houses</div>\n    </div>\n    <br>\n    <div *ngIf=\"everything\" class=\"row\">\n        <div *ngFor=\"let obj of everything.everything\" class=\"card col-md-4\" style=\"justify-content: center;\">\n            <div *ngIf=\"(obj.url.indexOf('characters')>0)\" class=\"card-img-top\" style=\"background-color:coral\"alt=\"Card image\">\n                <div class=\"card-body\" style=\"padding: 0 10px 0 10px\">\n                    <h5 class=\"card-title\">{{obj.name}}</h5>\n                    <span *ngIf=\"(obj.aliases[0]!='') && (obj.aliases.length==1)\" style=\"font-size:0.9em\">({{obj.aliases[0]}})</span>\n                    <span *ngIf=\"(obj.aliases.length>=2)\" style=\"font-size:0.9em\">({{obj.aliases[0]}},{{obj.aliases[1]}}...)</span>\n                    <p class=\"card-text\" style=\"font-size:0.8em\">Gender:{{obj.gender}}</p>\n                    <a class=\"btn btn-primary\" (click)=\"openDialog(obj.url)\">See Profile</a>\n                </div>\n            </div>\n            <div *ngIf=\"(obj.url.indexOf('houses')>0)\" class=\"card-img-top\" style=\"background-color:rgb(200, 212, 234);\" alt=\"Card image\">\n                    <div class=\"card-body\" style=\"padding: 0 10px 0 10px;\">\n                        <h5 class=\"card-title\">{{obj.name}}</h5>\n                        <span>({{obj.region}})</span><br><br>\n                        <a class=\"btn btn-primary\" (click)=\"openDialog(obj.url)\">See Details</a>\n                    </div>\n            </div>\n            <div *ngIf=\"(obj.url.indexOf('books')>0)\" class=\"card-img-top\" style=\"background-color:rgb(80, 255, 197)\" alt=\"Card image\">\n                    <div class=\"card-body\" style=\"padding: 0 10px 0 10px;\">\n                        <h5 class=\"card-title\">{{obj.name}}</h5>\n                        <span>({{obj.country}})</span>\n                        <p class=\"card-text\" style=\"font-size:0.9em\">Publisher : {{obj.publisher}}</p>\n                        <a class=\"btn btn-primary\" (click)=\"openDialog(obj.url)\">See Details</a>\n                    </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fire_ice_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fire-ice-http.service */ "./src/app/fire-ice-http.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details/details.component */ "./src/app/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(fireIcehttpService, dialog) {
        this.fireIcehttpService = fireIcehttpService;
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.everything = this.fireIcehttpService.getEverything();
    };
    HomeComponent.prototype.openDialog = function (url) {
        var _this = this;
        this.currentItem = this.fireIcehttpService.viewInformation(url).subscribe(function (res) {
            var dialogRef = _this.dialog.open(_details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"], {
                width: '600px',
                data: res
            });
        }, function (error) {
            console.log("some error occured");
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home Component destructor is called");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_fire_ice_http_service__WEBPACK_IMPORTED_MODULE_1__["FireIceHttpService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = __webpack_require__(/*! E:\Projects\fireIce\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map