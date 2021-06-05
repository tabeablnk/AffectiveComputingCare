(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+JM2":
/*!****************************************!*\
  !*** ./src/app/pain/pain.component.ts ***!
  \****************************************/
/*! exports provided: PainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainComponent", function() { return PainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");




class PainComponent {
    constructor() {
        this.chartType = 'polarArea';
        this.chartDatasets = [
            { data: [65] }
        ];
        this.chartLabels = ['Red'];
        this.chartColors = [
            {
                backgroundColor: [
                    'rgba(219, 0, 0, 0.1)',
                ],
                hoverBackgroundColor: [
                    'rgba(219, 0, 0, 0.2)',
                ],
                borderWidth: 2,
            }
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    ngOnInit() {
    }
    chartClicked(e) { }
    chartHovered(e) { }
}
PainComponent.ɵfac = function PainComponent_Factory(t) { return new (t || PainComponent)(); };
PainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PainComponent, selectors: [["app-pain"]], decls: 5, vars: 5, consts: [[2, "display", "block"], ["mdbChart", "", 3, "chartType", "datasets", "labels", "colors", "options", "chartHover", "chartClick"]], template: function PainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Schmerz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function PainComponent_Template_canvas_chartHover_4_listener($event) { return ctx.chartHovered($event); })("chartClick", function PainComponent_Template_canvas_chartClick_4_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chartType)("datasets", ctx.chartDatasets)("labels", ctx.chartLabels)("colors", ctx.chartColors)("options", ctx.chartOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InBhaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pain',
                templateUrl: './pain.component.html',
                styleUrls: ['./pain.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Uni\AffectiveComputing\AffectiveComputingCare\front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "container", "m-4"], [1, "t-3"], [2, "color", "red", "font-size", "30px", "font-weight", "bolder"], ["width", "50px", "src", "../../assets/logo.png"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projektbeschreibung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Unser Projet \"Care with love\"...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Klicke auf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " zur Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "N4V/":
/*!********************************************************!*\
  !*** ./src/app/test-patient/test-patient.component.ts ***!
  \********************************************************/
/*! exports provided: TestPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPatientComponent", function() { return TestPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video/video.component */ "o9RM");
/* harmony import */ var _emotions_emotions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emotions/emotions.component */ "VYgl");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../summary/summary.component */ "XqP2");
/* harmony import */ var _drowsiness_drowsiness_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drowsiness/drowsiness.component */ "lNKs");
/* harmony import */ var _pain_pain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pain/pain.component */ "+JM2");







class TestPatientComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestPatientComponent.ɵfac = function TestPatientComponent_Factory(t) { return new (t || TestPatientComponent)(); };
TestPatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestPatientComponent, selectors: [["app-test-patient"]], decls: 6, vars: 0, consts: [[1, "grid-container"], ["id", "video-container"], ["id", "emotions-container"], ["id", "summary-container"], ["id", "drowsiness-container"], ["id", "pain-container"]], template: function TestPatientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-emotions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-summary", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-drowsiness", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-pain", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_video_video_component__WEBPACK_IMPORTED_MODULE_1__["VideoComponent"], _emotions_emotions_component__WEBPACK_IMPORTED_MODULE_2__["EmotionsComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"], _drowsiness_drowsiness_component__WEBPACK_IMPORTED_MODULE_4__["DrowsinessComponent"], _pain_pain_component__WEBPACK_IMPORTED_MODULE_5__["PainComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  column-gap: 16px;\n  row-gap: 16px;\n  grid-template-columns: 33% 33% 33%;\n  grid-template-rows: 50% 50%;\n  height: 80vh;\n  width: 90vw;\n  margin: 0 auto;\n  margin-top: 32px;\n}\n\n#video-container[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: span 1;\n}\n\n#emotions-container[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: 4;\n}\n\n#drowsiness-container[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: 2;\n}\n\n#summary-container[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 1;\n}\n\n#pain-container[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  grid-column-end: 3;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRlc3QtcGF0aWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFFUiIsImZpbGUiOiJ0ZXN0LXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGNvbHVtbi1nYXA6IDE2cHg7XHJcbiAgICByb3ctZ2FwOiAxNnB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG4jdmlkZW8tY29udGFpbmVyIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDE7XHJcbn1cclxuXHJcbiNlbW90aW9ucy1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbn1cclxuXHJcbiNkcm93c2luZXNzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcclxufVxyXG5cclxuI3N1bW1hcnktY29udGFpbmVyIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xyXG59XHJcblxyXG4jcGFpbi1jb250YWluZXIge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-patient',
                templateUrl: './test-patient.component.html',
                styleUrls: ['./test-patient.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RWVo":
/*!************************************************************!*\
  !*** ./src/app/patienten-list/patienten-list.component.ts ***!
  \************************************************************/
/*! exports provided: PatientenListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientenListComponent", function() { return PatientenListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");



function PatientenListComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientenListComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.position, " ");
} }
function PatientenListComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Vorname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientenListComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.vorname, " ");
} }
function PatientenListComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientenListComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.name, " ");
} }
function PatientenListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Station ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientenListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.station, " ");
} }
function PatientenListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zimmer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientenListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.zimmer, " ");
} }
function PatientenListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pfleger ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientenListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.pfleger, " ");
} }
function PatientenListComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function PatientenListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', vorname: "Helga", station: 2, zimmer: 14, pfleger: 'Ht' },
    { position: 2, name: 'Helium', vorname: "Tom", station: 1, zimmer: 3, pfleger: 'Li' },
    { position: 3, name: 'Lithium', vorname: "Gerd", station: 3, zimmer: 23, pfleger: 'Ph' },
    { position: 4, name: 'Beryllium', vorname: "Selena", station: 5, zimmer: 12, pfleger: 'Ds' },
    { position: 5, name: 'Boron', vorname: "Tina", station: 3, zimmer: 27, pfleger: 'Ph' },
    { position: 6, name: 'Carbon', vorname: "Karin", station: 3, zimmer: 10, pfleger: 'Ph' },
    { position: 7, name: 'Nitrogen', vorname: "Lisa", station: 2, zimmer: 24, pfleger: 'Ht' },
    { position: 8, name: 'Oxygen', vorname: "Fred", station: 1, zimmer: 5, pfleger: 'Li' },
    { position: 9, name: 'Fluorine', vorname: "Sophia", station: 4, zimmer: 7, pfleger: 'Se' },
    { position: 10, name: 'Neon', vorname: "Elena", station: 4, zimmer: 19, pfleger: 'Se' },
];
class PatientenListComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'vorname', 'station', 'zimmer', 'pfleger'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
}
PatientenListComponent.ɵfac = function PatientenListComponent_Factory(t) { return new (t || PatientenListComponent)(); };
PatientenListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientenListComponent, selectors: [["app-patienten-list"]], decls: 21, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vorname"], ["matColumnDef", "name"], ["matColumnDef", "station"], ["matColumnDef", "zimmer"], ["matColumnDef", "pfleger"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PatientenListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientenListComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PatientenListComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PatientenListComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PatientenListComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PatientenListComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PatientenListComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PatientenListComponent_th_11_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PatientenListComponent_td_12_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PatientenListComponent_th_14_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PatientenListComponent_td_15_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PatientenListComponent_th_17_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PatientenListComponent_td_18_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PatientenListComponent_tr_19_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PatientenListComponent_tr_20_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #eaf5eb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhdGllbnRlbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJwYXRpZW50ZW4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjQ1LCAyMzUpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientenListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patienten-list',
                templateUrl: './patienten-list.component.html',
                styleUrls: ['./patienten-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor() {
        this.title = 'front-end';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["src", "../assets/logo.png"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/home"], ["mat-menu-item", "", "routerLink", "/patientenListe"], ["routerLink", "/", 2, "cursor", "pointer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Testpatient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Patientenliste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Wilkommen zu Care With Love");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: white;\n}\nmat-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRVIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VYgl":
/*!************************************************!*\
  !*** ./src/app/emotions/emotions.component.ts ***!
  \************************************************/
/*! exports provided: EmotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmotionsComponent", function() { return EmotionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");




class EmotionsComponent {
    constructor() {
        this.chartType = 'horizontalBar';
        this.chartDatasets = [
            { data: [85, 59, 60] }
        ];
        this.chartLabels = ['Traurig', 'Glücklich', 'Neutral'];
        this.chartColors = [
            {
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2,
            }
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    ngOnInit() {
    }
    chartClicked(e) { }
    chartHovered(e) { }
}
EmotionsComponent.ɵfac = function EmotionsComponent_Factory(t) { return new (t || EmotionsComponent)(); };
EmotionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmotionsComponent, selectors: [["app-emotions"]], decls: 5, vars: 5, consts: [[2, "display", "block"], ["mdbChart", "", 3, "chartType", "datasets", "labels", "colors", "options", "chartHover", "chartClick"]], template: function EmotionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Psychische Bed\u00FCrfnisse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function EmotionsComponent_Template_canvas_chartHover_4_listener($event) { return ctx.chartHovered($event); })("chartClick", function EmotionsComponent_Template_canvas_chartClick_4_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chartType)("datasets", ctx.chartDatasets)("labels", ctx.chartLabels)("colors", ctx.chartColors)("options", ctx.chartOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVtb3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJlbW90aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmotionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emotions',
                templateUrl: './emotions.component.html',
                styleUrls: ['./emotions.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XqP2":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");




class SummaryComponent {
    constructor() {
        this.chartType = 'doughnut';
        this.chartDatasets = [
            { data: [300, 50, 100], label: 'My First dataset' }
        ];
        this.chartLabels = ['Schmerz', 'Müdigkeit', 'Psych. Bedürfnisse'];
        this.chartColors = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870'],
                borderWidth: 2,
            }
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    ngOnInit() {
    }
    chartClicked(e) { }
    chartHovered(e) { }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], decls: 5, vars: 6, consts: [[2, "display", "block"], ["mdbChart", "", 3, "chartType", "datasets", "labels", "colors", "options", "legend", "chartHover", "chartClick"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00DCberblick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function SummaryComponent_Template_canvas_chartHover_4_listener($event) { return ctx.chartHovered($event); })("chartClick", function SummaryComponent_Template_canvas_chartClick_4_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chartType)("datasets", ctx.chartDatasets)("labels", ctx.chartLabels)("colors", ctx.chartColors)("options", ctx.chartOptions)("legend", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary',
                templateUrl: './summary.component.html',
                styleUrls: ['./summary.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./summary/summary.component */ "XqP2");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./video/video.component */ "o9RM");
/* harmony import */ var _pain_pain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pain/pain.component */ "+JM2");
/* harmony import */ var _drowsiness_drowsiness_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drowsiness/drowsiness.component */ "lNKs");
/* harmony import */ var _emotions_emotions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emotions/emotions.component */ "VYgl");
/* harmony import */ var _patienten_list_patienten_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patienten-list/patienten-list.component */ "RWVo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _test_patient_test_patient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./test-patient/test-patient.component */ "N4V/");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"],
        _video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"],
        _pain_pain_component__WEBPACK_IMPORTED_MODULE_9__["PainComponent"],
        _drowsiness_drowsiness_component__WEBPACK_IMPORTED_MODULE_10__["DrowsinessComponent"],
        _emotions_emotions_component__WEBPACK_IMPORTED_MODULE_11__["EmotionsComponent"],
        _patienten_list_patienten_list_component__WEBPACK_IMPORTED_MODULE_12__["PatientenListComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _test_patient_test_patient_component__WEBPACK_IMPORTED_MODULE_14__["TestPatientComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__["SummaryComponent"],
                    _video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"],
                    _pain_pain_component__WEBPACK_IMPORTED_MODULE_9__["PainComponent"],
                    _drowsiness_drowsiness_component__WEBPACK_IMPORTED_MODULE_10__["DrowsinessComponent"],
                    _emotions_emotions_component__WEBPACK_IMPORTED_MODULE_11__["EmotionsComponent"],
                    _patienten_list_patienten_list_component__WEBPACK_IMPORTED_MODULE_12__["PatientenListComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _test_patient_test_patient_component__WEBPACK_IMPORTED_MODULE_14__["TestPatientComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lNKs":
/*!****************************************************!*\
  !*** ./src/app/drowsiness/drowsiness.component.ts ***!
  \****************************************************/
/*! exports provided: DrowsinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrowsinessComponent", function() { return DrowsinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");




class DrowsinessComponent {
    constructor() {
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [0, 0, 0, 0, 0, 0, 0, 10, 10, 15, 20, 65, 59, 0, 5, 10, 30, 55, 80, 81, 100, 0, 0, 0, 0] },
        ];
        this.chartLabels = ['00', '01', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        this.chartColors = [
            {
                backgroundColor: 'rgb(70, 191, 189, .2)',
                borderColor: 'rgba(70, 191, 189)',
                borderWidth: 2,
            },
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    ngOnInit() {
    }
    chartClicked(e) { }
    chartHovered(e) { }
}
DrowsinessComponent.ɵfac = function DrowsinessComponent_Factory(t) { return new (t || DrowsinessComponent)(); };
DrowsinessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrowsinessComponent, selectors: [["app-drowsiness"]], decls: 5, vars: 5, consts: [[2, "display", "block"], ["mdbChart", "", 3, "chartType", "datasets", "labels", "colors", "options", "chartHover", "chartClick"]], template: function DrowsinessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "M\u00FCdigkeit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function DrowsinessComponent_Template_canvas_chartHover_4_listener($event) { return ctx.chartHovered($event); })("chartClick", function DrowsinessComponent_Template_canvas_chartClick_4_listener($event) { return ctx.chartClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.chartType)("datasets", ctx.chartDatasets)("labels", ctx.chartLabels)("colors", ctx.chartColors)("options", ctx.chartOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyb3dzaW5lc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImRyb3dzaW5lc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrowsinessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drowsiness',
                templateUrl: './drowsiness.component.html',
                styleUrls: ['./drowsiness.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o9RM":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class VideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], decls: 4, vars: 0, consts: [["src", "../../assets/placeholder.jpeg"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Marianne Thomann");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n}\n[_nghost-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7QUFFUiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgbWF0LWNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _patienten_list_patienten_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patienten-list/patienten-list.component */ "RWVo");
/* harmony import */ var _test_patient_test_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-patient/test-patient.component */ "N4V/");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _test_patient_test_patient_component__WEBPACK_IMPORTED_MODULE_4__["TestPatientComponent"] },
    { path: 'patientenListe', component: _patienten_list_patienten_list_component__WEBPACK_IMPORTED_MODULE_3__["PatientenListComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");









































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_38__["MatTreeModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_38__["MatTreeModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_38__["MatTreeModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map