(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+q4o":
/*!***********************************************************!*\
  !*** ./src/app/components/my-teams/my-teams.component.ts ***!
  \***********************************************************/
/*! exports provided: MyTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamsComponent", function() { return MyTeamsComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_my_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/my-teams.service */ "fil2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");







function MyTeamsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { data: a0 }; };
function MyTeamsComponent_div_7_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyTeamsComponent_div_7_tr_9_Template_fa_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const team_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.deteleTeam(team_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", team_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](team_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/create-team")("state", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, team_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faPen);
} }
function MyTeamsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matSortChange", function MyTeamsComponent_div_7_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MyTeamsComponent_div_7_tr_9_Template, 10, 9, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.sortedData);
} }
class MyTeamsComponent {
    constructor(myTeamsService) {
        this.myTeamsService = myTeamsService;
        this.teams = [];
        this.sortedData = [];
        this.loading = true;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlus"];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faShareAlt"];
        this.faDelete = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrash"];
        this.faPen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPen"];
    }
    ngOnInit() {
        this.myTeamsService.getTeams().subscribe(teams => {
            this.sortedData = teams;
            this.loading = false;
        });
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    editTeam(team) {
        this.myTeamsService.editTeam(team.id);
    }
    deteleTeam(team) {
        this.myTeamsService.deleteTeam(team.id);
        this.ngOnInit();
    }
    sortData(sort) {
        const data = this.sortedData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'description': return compare(a.description, b.description, isAsc);
                default: return 0;
            }
        });
    }
}
MyTeamsComponent.ɵfac = function MyTeamsComponent_Factory(t) { return new (t || MyTeamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_my_teams_service__WEBPACK_IMPORTED_MODULE_2__["MyTeamsService"])); };
MyTeamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyTeamsComponent, selectors: [["app-my-teams"]], decls: 8, vars: 3, consts: [[1, "card"], ["routerLink", "/create-team", 1, "btn", "vertical-gradient", "btn-animation"], [2, "position", "relative", "top", "9px", 3, "icon"], ["class", "loader", 4, "ngIf"], ["style", "margin: 10px;", 4, "ngIf"], [1, "loader"], [2, "margin", "10px"], ["matSort", "", 1, "table", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "description"], ["class", "table-animation", 4, "ngFor", "ngForOf"], [1, "table-animation"], [2, "text-align", "end"], [1, "icon", "btn-animation", 3, "icon", "click"], [1, "icon", "btn-animation", 3, "icon"], [3, "routerLink", "state"]], template: function MyTeamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyTeamsComponent_div_6_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MyTeamsComponent_div_7_Template, 10, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".card[_ngcontent-%COMP%] {\n    height: 100%;\n    position: relative;\n}\n\n.btn[_ngcontent-%COMP%] {\n    height:37px;\n    width:37px;\n    cursor:pointer;\n    border-radius: 10px;\n    color: white; \n    text-align: center;\n    position: absolute;\n    top: 20px;\n    right: 30px;\n    padding: 0;\n    box-shadow: 0px 5px 10px 1px rgba(169,57,122, 0.5);\n}\n\nhr[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 24px;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #694598;\n    font-size: 22px;\n    margin: 0;\n    padding: 25px;\n}\n\n.table[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n    width: 100%;\n    font-size: 13px;\n    font-weight: bold;\n    color: rgb(75, 75, 75);\n}\n\nth[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n    text-align: left;\n}\n\ntd[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n    text-align: left;\n    border-top: 1px solid rgb(233, 233, 233);\n    border-bottom: 1px solid rgb(233, 233, 233);\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background: #f7eef7;\n    color: #a9397a;\n}\n\n.radius[_ngcontent-%COMP%]:hover {\n    border-radius: 30px;\n}\n\n.icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.table-animation[_ngcontent-%COMP%]{\n    transition: all .2s ease-in-out;\n}\n\n.table-animation[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n}\n\n.loader[_ngcontent-%COMP%] {\n    color:#662f86;\n    font-size: 10px;\n    margin: 230px auto;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    position: relative;\n    text-indent: -9999em;\n    animation: load4 1.3s infinite linear;\n    transform: translateZ(0);\n}\n\n@keyframes load4 {\n    0%,\n    100% {\n        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n    }\n    12.5% {\n        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    25% {\n        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n    }\n    37.5% {\n        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    50% {\n        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n    }\n    62.5% {\n        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n    }\n    75% {\n        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n    }\n    87.5% {\n        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXRlYW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtEQUFrRDtBQUN0RDs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUVwQixxQ0FBcUM7SUFHckMsd0JBQXdCO0FBQzVCOztBQTZCSTtJQUNBOztRQUVJLHFJQUFxSTtJQUN6STtJQUNBO1FBQ0ksbUlBQW1JO0lBQ3ZJO0lBQ0E7UUFDSSxxSUFBcUk7SUFDekk7SUFDQTtRQUNJLHlJQUF5STtJQUM3STtJQUNBO1FBQ0ksdUlBQXVJO0lBQzNJO0lBQ0E7UUFDSSxtSUFBbUk7SUFDdkk7SUFDQTtRQUNJLHlJQUF5STtJQUM3STtJQUNBO1FBQ0ksb0lBQW9JO0lBQ3hJO0FBQ0oiLCJmaWxlIjoibXktdGVhbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuIHtcbiAgICBoZWlnaHQ6MzdweDtcbiAgICB3aWR0aDozN3B4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAxcHggcmdiYSgxNjksNTcsMTIyLCAwLjUpO1xufVxuXG5cbmhyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbmgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzY5NDU5ODtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcbn1cblxudGgge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZCB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xufVxuXG50Ym9keSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZWVmNztcbiAgICBjb2xvcjogI2E5Mzk3YTtcbn1cblxuLnJhZGl1czpob3ZlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLWFuaW1hdGlvbntcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4udGFibGUtYW5pbWF0aW9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ubG9hZGVyIHtcbiAgICBjb2xvcjojNjYyZjg2O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW46IDIzMHB4IGF1dG87XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkIDEuM3MgaW5maW5pdGUgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkNCB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gICAgfVxuICAgIDEyLjUlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDM3LjUlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgNjIuNSUge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gICAgfVxuICAgIDg3LjUlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBsb2FkNCB7XG4gICAgMCUsXG4gICAgMTAwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIDAuMmVtLCAyZW0gLTJlbSAwIDBlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIDA7XG4gICAgfVxuICAgIDEyLjUlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgMCwgMmVtIC0yZW0gMCAwLjJlbSwgM2VtIDAgMCAwLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0wLjVlbSwgMmVtIC0yZW0gMCAwLCAzZW0gMCAwIDAuMmVtLCAyZW0gMmVtIDAgMCwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIC0xZW0sIC0zZW0gMCAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDM3LjUlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtM2VtIDAgLTFlbSwgMmVtIC0yZW0gMCAtMWVtLCAzZW0gMGVtIDAgMCwgMmVtIDJlbSAwIDAuMmVtLCAwIDNlbSAwIDBlbSwgLTJlbSAyZW0gMCAtMWVtLCAtM2VtIDBlbSAwIC0xZW0sIC0yZW0gLTJlbSAwIC0xZW07XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTNlbSAwIC0xZW0sIDJlbSAtMmVtIDAgLTFlbSwgM2VtIDAgMCAtMWVtLCAyZW0gMmVtIDAgMGVtLCAwIDNlbSAwIDAuMmVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgLTFlbSwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgNjIuNSUge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgMCwgLTJlbSAyZW0gMCAwLjJlbSwgLTNlbSAwIDAgMCwgLTJlbSAtMmVtIDAgLTFlbTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAtMWVtLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwZW0gMCAtMWVtLCAyZW0gMmVtIDAgLTFlbSwgMCAzZW0gMCAtMWVtLCAtMmVtIDJlbSAwIDAsIC0zZW0gMGVtIDAgMC4yZW0sIC0yZW0gLTJlbSAwIDA7XG4gICAgfVxuICAgIDg3LjUlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMCAwLCAyZW0gLTJlbSAwIC0xZW0sIDNlbSAwIDAgLTFlbSwgMmVtIDJlbSAwIC0xZW0sIDAgM2VtIDAgLTFlbSwgLTJlbSAyZW0gMCAwLCAtM2VtIDBlbSAwIDAsIC0yZW0gLTJlbSAwIDAuMmVtO1xuICAgIH1cbn1cbiJdfQ== */"] });
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pedro/Development/squad-management-tool-PS/src/main.ts */"zUnb");


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

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarComponent {
    constructor() {
        this.name = "Pedro Henrique Lemes";
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUserCircle"];
    }
    ngOnInit() {
    }
    getInitials(name) {
        const fullName = name.split(' ');
        const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        return initials.toUpperCase();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 2, consts: [[1, "navbar", "gradient"], [1, "logo"], ["src", "../../../assets/icons-venturus/logo-venturus.png", "height", "50px"], [1, "profile"], [1, "name-profile"], [1, "image-profile"], [1, "initials"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Squad Managemnet Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getInitials(ctx.name));
    } }, styles: [".navbar[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 5px;\n    align-items: center;\n}\n\n.logo[_ngcontent-%COMP%] {\n    display: flex;\n    color: white;\n    font-weight: bold;\n    font-size: 18px;\n    align-items: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 30px;\n}\n\n.profile[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.name-profile[_ngcontent-%COMP%] {\n    line-height: 34px;\n    color: white;\n    font-size: 15px;\n}\n\n.image-profile[_ngcontent-%COMP%] {\n    margin-right: 25px;\n    margin-left: 10px;\n    background-color: rgb(238, 238, 238);\n    height: 34px;\n    width: 34px;\n    border-radius: 100%;\n}\n\n.initials[_ngcontent-%COMP%] {\n    text-align: center;\n    line-height: 34px;\n    height: 34px;\n    width: 34px;\n}\n\n@media (max-width: 600px) {\n\n    .profile[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvIGltZyB7XG4gICAgbWFyZ2luOiAwIDMwcHg7XG59XG5cbi5wcm9maWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubmFtZS1wcm9maWxlIHtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaW1hZ2UtcHJvZmlsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLmluaXRpYWxzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHdpZHRoOiAzNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcblxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "GqA2":
/*!*************************************************************************!*\
  !*** ./src/app/components/insight-players/insight-players.component.ts ***!
  \*************************************************************************/
/*! exports provided: InsightPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightPlayersComponent", function() { return InsightPlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InsightPlayersComponent {
    constructor() {
        this.mostPickedPlayer = "Lionel Andrés Messi";
        this.lessPickedPlayer = "Cristiano Ronaldo dos Santos Aveiro";
    }
    ngOnInit() { }
    getInitials(name) {
        const fullName = name.split(' ');
        const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        return initials.toUpperCase();
    }
}
InsightPlayersComponent.ɵfac = function InsightPlayersComponent_Factory(t) { return new (t || InsightPlayersComponent)(); };
InsightPlayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsightPlayersComponent, selectors: [["app-insight-players"]], decls: 20, vars: 4, consts: [[1, "card", "vertical-gradient"], [1, "row"], [1, "column"], [1, "image"], [1, "initial-letters"]], template: function InsightPlayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Most picked player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Less picked player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mostPickedPlayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getInitials(ctx.mostPickedPlayer));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lessPickedPlayer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getInitials(ctx.lessPickedPlayer));
    } }, styles: ["h1[_ngcontent-%COMP%]{\n    margin: 0 10px;\n    overflow: hidden;\n}\n\nh2[_ngcontent-%COMP%] {\n    overflow: hidden;\n    font-size: 15px;\n}\n\n.row[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.column[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    float: left;\n    width: 50%;\n    text-align: center;\n    height: 260px;\n    color: white;\n}\n\n.image[_ngcontent-%COMP%] {\n    padding-left: 30%;\n    padding-right: 30%;\n    display: flex;\n    margin-top: 30px;\n}\n\n.image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background-color: rgb(238, 238, 238);\n    height: 130px;\n    width: 130px;\n    border-radius: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 25px;\n    color: #000;\n}\n\n@media (max-width: 600px){\n    \n    .column[_ngcontent-%COMP%] {\n        margin-top: 30px;\n        display: block;\n        width: 50%;\n        text-align: center;\n        height: 260px;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2lnaHQtcGxheWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUk7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsYUFBYTtJQUNqQjs7QUFFSiIsImZpbGUiOiJpbnNpZ2h0LXBsYXllcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmgyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnJvdzphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLmNvbHVtbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaW1hZ2Ugc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgXG4gICAgLmNvbHVtbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgfVxuXG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "R7rD":
/*!************************************************!*\
  !*** ./src/app/screens/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_my_teams_my_teams_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/my-teams/my-teams.component */ "+q4o");
/* harmony import */ var _components_top_five_top_five_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/top-five/top-five.component */ "wqvx");
/* harmony import */ var _components_insight_players_insight_players_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/insight-players/insight-players.component */ "GqA2");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "container"], [1, "grid-col"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-my-teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-top-five");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-insight-players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_my_teams_my_teams_component__WEBPACK_IMPORTED_MODULE_1__["MyTeamsComponent"], _components_top_five_top_five_component__WEBPACK_IMPORTED_MODULE_2__["TopFiveComponent"], _components_insight_players_insight_players_component__WEBPACK_IMPORTED_MODULE_3__["InsightPlayersComponent"]], styles: [".container[_ngcontent-%COMP%] {\n    background-color: rgb(247, 247, 247);\n    display: grid;\n    padding: 33px;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 15px 38px;\n    margin: 0 auto;\n}\n\n.grid-col[_ngcontent-%COMP%]:nth-child(1) {\n    grid-row: 1 / 3;\n}\n\n@media (max-width: 1000px){\n    .container[_ngcontent-%COMP%]{\n        grid-template-columns: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDMzcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDE1cHggMzhweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmdyaWQtY29sOm50aC1jaGlsZCgxKSB7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcbiAgICAuY29udGFpbmVye1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmU7XG4gICAgfVxufVxuXG4iXX0= */"] });


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
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/home/home.component */ "R7rD");
/* harmony import */ var _components_my_teams_my_teams_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-teams/my-teams.component */ "+q4o");
/* harmony import */ var _components_top_five_top_five_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/top-five/top-five.component */ "wqvx");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_insight_players_insight_players_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/insight-players/insight-players.component */ "GqA2");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _screens_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/create-team/create-team.component */ "f/6U");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _screens_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_my_teams_my_teams_component__WEBPACK_IMPORTED_MODULE_5__["MyTeamsComponent"],
        _components_top_five_top_five_component__WEBPACK_IMPORTED_MODULE_6__["TopFiveComponent"],
        _components_insight_players_insight_players_component__WEBPACK_IMPORTED_MODULE_8__["InsightPlayersComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _screens_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_10__["CreateTeamComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]] }); })();


/***/ }),

/***/ "f/6U":
/*!**************************************************************!*\
  !*** ./src/app/screens/create-team/create-team.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamComponent", function() { return CreateTeamComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_my_teams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/my-teams.service */ "fil2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








function CreateTeamComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateTeamComponent_div_40_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const tag_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.deleteTag(tag_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tag_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r5.faTimes);
} }
class CreateTeamComponent {
    constructor(route, router, myTeams) {
        this.route = route;
        this.router = router;
        this.myTeams = myTeams;
        this.team = {
            name: '',
            description: '',
            website: '',
            type: '',
            tags: [],
            formation: ''
        };
        this.title = 'Create your team';
        this.isEdit = false;
        this.saveTouched = false;
        this.newTag = '';
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTimes"];
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => window.history.state))
            .subscribe(state => {
            if (state.data != undefined) {
                this.team = state.data;
                this.title = "Edit your Team";
                this.isEdit = true;
            }
        });
    }
    deleteTag(tag) {
        this.team.tags.splice(this.team.tags.indexOf(tag), 1);
    }
    addNewTag(value) {
        if ((value.key == ';' || value.key == 'Enter') && this.newTag != '') {
            if (value.key == ';') {
                this.newTag = this.newTag.substring(0, this.newTag.length - 1);
            }
            this.team.tags.push(this.newTag);
            this.newTag = '';
        }
    }
    onSave(form) {
        if (form.valid) {
            if (this.isEdit) {
                this.myTeams.editTeam(this.team);
            }
            else {
                this.myTeams.createTeam(this.team);
            }
            this.router.navigate(['home']);
        }
        else {
            this.saveTouched = true;
        }
    }
}
CreateTeamComponent.ɵfac = function CreateTeamComponent_Factory(t) { return new (t || CreateTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_my_teams_service__WEBPACK_IMPORTED_MODULE_4__["MyTeamsService"])); };
CreateTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateTeamComponent, selectors: [["app-create-team"]], decls: 84, vars: 18, consts: [[1, "container"], [1, "card"], [1, "body"], ["novalidate", "", 3, "ngSubmit"], ["teamForm", "ngForm"], [1, "row"], [1, "column"], [1, "input-text"], ["ngModel", "", "required", "", "name", "name", "type", "text", "placeholder", "Insert team name", 3, "ngModel", "ngModelChange"], ["iptname", "ngModel"], ["name", "description", 3, "ngModel", "ngModelChange"], ["ngModel", "", "name", "website", "required", "", "type", "text", "placeholder", "https://site.com", 3, "ngModel", "ngModelChange"], ["iptwebsite", "ngModel"], [1, "radio"], ["ngModel", "", "name", "real", "required", "", "ngModel", "", "type", "radio", "value", "real", "name", "real", 3, "ngModel", "ngModelChange"], ["real", "ngModel"], [1, "checkmark"], ["ngModel", "", "name", "fantasy", "required", "", "type", "radio", "value", "fantasy", "name", "fantasy", 3, "ngModel", "ngModelChange"], ["fantasy", "ngModel"], [1, "container-tags"], ["class", "tag", 4, "ngFor", "ngForOf"], ["ngModel", "", "placeholder", "Insert a tag", "name", "tag", 1, "input-tag", 3, "ngModel", "keyup", "ngModelChange"], ["box", ""], [2, "display", "inline-flex"], [1, "input-text", 2, "margin", "0"], [1, "vertical-gradient", "field"], ["type", "submit", 1, "vertical-gradient", 2, "cursor", "pointer"], ["type", "text", "placeholder", "e.g. Ronal", 2, "margin-bottom", "7px"], [1, "player-tile"], [1, "tag"], [2, "float", "left"], [1, "btn-animation", 2, "float", "right", "margin-left", "5px", 3, "click"], [3, "icon"]], template: function CreateTeamComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateTeamComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); return ctx.onSave(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Team Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Team name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTeamComponent_Template_input_ngModelChange_14_listener($event) { return ctx.team.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTeamComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.team.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Team website");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTeamComponent_Template_input_ngModelChange_23_listener($event) { return ctx.team.website = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Team Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Real ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTeamComponent_Template_input_ngModelChange_29_listener($event) { return ctx.team.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Fantasy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateTeamComponent_Template_input_ngModelChange_34_listener($event) { return ctx.team.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, CreateTeamComponent_div_40_Template, 5, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CreateTeamComponent_Template_input_keyup_41_listener($event) { return ctx.addNewTag($event); })("ngModelChange", function CreateTeamComponent_Template_input_ngModelChange_41_listener($event) { return ctx.newTag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Configure Squad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Selecione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "3 - 2 - 2 - 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "3 - 2 - 3 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "3 - 4 - 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "3 - 5 - 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "4 - 2 - 3 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "4 - 3 - 1 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "4 - 3 - 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "4 - 4 - 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "4 - 5 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "5 - 4 - 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Search players");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-invalid-text", !_r1.valid && ctx.saveTouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-invalid-input", !_r1.valid && ctx.saveTouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.team.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.team.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-invalid-text", !_r2.valid && ctx.saveTouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-invalid-input", !_r2.valid && ctx.saveTouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.team.website);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-invalid-text", (!_r3.valid || !_r4.valid) && ctx.saveTouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.team.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.team.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.team.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newTag);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]], styles: [".container[_ngcontent-%COMP%] {\n    background-color: rgb(247, 247, 247);\n    padding: 33px;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #694598;\n    font-size: 22px;\n    margin: 0;\n    padding: 25px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #694598;\n    font-size: 16px;\n    margin: 0;\n    color: gray;\n    padding: 18px;\n    text-align: center;\n    text-transform: uppercase;\n}\n\nhr[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    margin-bottom: 24px;\n}\n\n.body[_ngcontent-%COMP%] {\n    padding: 0 90px;\n}\n\n.column[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n    padding: 10px 60px;\n  }\n\n.row[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.input-text[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 15px;\n    margin-bottom:2px;\n    margin-top: 10px;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 6px 10px;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n}\n\ninput[type=text][_ngcontent-%COMP%]::placeholder {\ncolor:#cccccc;\n}\n\n.has-invalid-text[_ngcontent-%COMP%] {\n    color: rgb(206, 5, 5) ;\n}\n\n.has-invalid-input[_ngcontent-%COMP%] {\n    border: 1px solid rgb(206, 5, 5) !important;\n}\n\nbutton[type=submit][_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 8px 0;\n    padding: 12px 20px;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    font-size: 18px;\n    font-weight: bold;\n}\n\ntextarea[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 200px;\n    resize: none;\n}\n\n.container-tags[_ngcontent-%COMP%] {\n    padding: 10px 18px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 120px;\n    overflow:auto;\n    display: inline-flex;\n    flex-wrap: wrap;\n    width: 100%;\n}\n\n.tag[_ngcontent-%COMP%] {\n    background-color: #c50341;\n    border-radius: 30px;\n    height: 22px;\n    padding: 0 10px 0 10px;\n    color: white;\n    font-size: 15px;\n    width: auto;\n    margin: 7px;\n}\n\ninput[type=text][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 6px 10px;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n}\n\n.input-tag[_ngcontent-%COMP%] {\n    height: 35px;\n    display: inline-block;\n    width: 150px;\n    vertical-align: middle;\n    padding: 6px 10px;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n}\n\n.radio[_ngcontent-%COMP%] {\n    display: inline-flex;\n    position: relative;\n    padding-left: 25px;\n    cursor: pointer;\n    font-size: 15px;\n    -webkit-user-select: none;\n    user-select: none;\n    color: gray;\n    margin-right: 35px;\n}\n\n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 18px;\n    width: 18px;\n    border-radius: 50%;\n    border: 1px solid rgb(136, 136, 136);\n}\n\n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n    background-color:  #ffffff;\n}\n\n.checkmark[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n}\n\n.radio[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    top: 2px;\n    left: 2px;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background:  #a0387e;\n}\n\nselect[_ngcontent-%COMP%] {\n    margin-left: 50px;\n    width: 150px;\n    height:30px;\n    color:rgb(0, 0, 0);\n    border-radius: 4px;\n    background-color: white;\n}\n\n.field[_ngcontent-%COMP%] {\n    height: 650px;\n    margin-top: 10px;\n    border-radius: 5px;\n}\n\n.player-tile[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, #ffffff 0%, #d6d6d6 100%);\n    border: 2px dashed rgb(211, 211, 211);\n    margin-top: 20px;\n    height: 75px;\n}\n\n@media (max-width: 600px){\n    .body[_ngcontent-%COMP%]{\n        padding: 0 40px;\n    }\n    .column[_ngcontent-%COMP%] {\n        float: none;\n        width: 100%;\n        padding: 0;\n    }\n    textarea[_ngcontent-%COMP%] {\n        height: 100px;\n    }\n}\n\n@media (min-width: 600px) and (max-width: 1000px){\n    .body[_ngcontent-%COMP%]{\n        padding: 0 40px;\n    }\n\n    .column[_ngcontent-%COMP%] {\n        padding: 0 10px;\n    }\n\n    textarea[_ngcontent-%COMP%] {\n        height: 180px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS10ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YseUJBQXlCO0lBR3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6ImNyZWF0ZS10ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG4gICAgcGFkZGluZzogMzNweDtcbn1cblxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNjk0NTk4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMjVweDtcbn1cblxuaDIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNjk0NTk4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgcGFkZGluZzogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaHIge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uYm9keSB7XG4gICAgcGFkZGluZzogMCA5MHB4O1xufVxuXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHggNjBweDtcbiAgfVxuICBcbi5yb3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5pbnB1dC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbToycHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06OnBsYWNlaG9sZGVyIHtcbmNvbG9yOiNjY2NjY2M7XG59XG5cbi5oYXMtaW52YWxpZC10ZXh0IHtcbiAgICBjb2xvcjogcmdiKDIwNiwgNSwgNSkgO1xufVxuXG4uaGFzLWludmFsaWQtaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDYsIDUsIDUpICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uY29udGFpbmVyLXRhZ3Mge1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzUwMzQxO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDdweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pbnB1dC10YWcge1xuICAgIGhlaWdodDogMzVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cblxuLnJhZGlvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59XG5cbi5yYWRpbyBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTM2LCAxMzYsIDEzNik7XG59XG5cbi5yYWRpbyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmY7XG59XG5cbi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYWRpbyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yYWRpbyAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICB0b3A6IDJweDtcbiAgICBsZWZ0OiAycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAgI2EwMzg3ZTtcbn1cblxuXG5zZWxlY3Qge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBjb2xvcjpyZ2IoMCwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZmllbGQge1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wbGF5ZXItdGlsZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2Q2ZDZkNiAxMDAlKTtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDIxMSwgMjExLCAyMTEpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xuICAgIC5ib2R5e1xuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgfVxuICAgIC5jb2x1bW4ge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XG4gICAgLmJvZHl7XG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICB9XG5cbiAgICAuY29sdW1uIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICB9XG59XG5cblxuXG4gICJdfQ== */"] });


/***/ }),

/***/ "fil2":
/*!**********************************************!*\
  !*** ./src/app/services/my-teams.service.ts ***!
  \**********************************************/
/*! exports provided: MyTeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamsService", function() { return MyTeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MyTeamsService {
    constructor(http) {
        this.http = http;
        this.url = 'https://my-json-server.typicode.com/pedroh12314/squad-management-tool-PS';
    }
    getTeams() {
        return this.http.get(`${this.url}/teams`);
    }
    createTeam(team) {
        const id = new Date;
        this.http.put(`${this.url}/teams}`, team);
    }
    editTeam(team) {
        console.log(`${this.url}/teams/${team.id}`);
        this.http.put(`${this.url}/teams/${team.id}`, team);
    }
    deleteTeam(id) {
        this.http.delete(`${this.url}/teams/${id}`).subscribe(_ => console.log("Excluido"));
    }
}
MyTeamsService.ɵfac = function MyTeamsService_Factory(t) { return new (t || MyTeamsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MyTeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyTeamsService, factory: MyTeamsService.ɵfac, providedIn: 'root' });
class Teams {
}


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2020 - All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n    color: black;\n    background-color: rgb(226, 226, 226);\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    bottom: 0;\n    position:sticky;\n    width: 100%;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246c3RpY2t5O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _screens_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/create-team/create-team.component */ "f/6U");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/home/home.component */ "R7rD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _screens_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'create-team', component: _screens_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_1__["CreateTeamComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wqvx":
/*!***********************************************************!*\
  !*** ./src/app/components/top-five/top-five.component.ts ***!
  \***********************************************************/
/*! exports provided: TopFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopFiveComponent", function() { return TopFiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function TopFiveComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r2.age);
} }
function TopFiveComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r3.age);
} }
class TopFiveComponent {
    constructor() { }
    ngOnInit() {
        this.highest = [
            { name: "Colombia", age: 28.6 },
            { name: "Argentina", age: 28.5 },
            { name: "Irã", age: 28.4 },
            { name: "Portugal", age: 28.1 },
            { name: "Uruguai", age: 28.0 },
        ];
        this.lowest = [
            { name: "Espanha", age: 27.7 },
            { name: "Itália", age: 27.3 },
            { name: "Brasil", age: 26.7 },
            { name: "Inglaterra", age: 26 },
            { name: "Alemanha", age: 25.8 },
        ];
    }
}
TopFiveComponent.ɵfac = function TopFiveComponent_Factory(t) { return new (t || TopFiveComponent)(); };
TopFiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopFiveComponent, selectors: [["app-top-five"]], decls: 15, vars: 2, consts: [[1, "card"], [1, "row-score"], [1, "column"], [1, "group-tiles"], ["class", "card-tiles", 4, "ngFor", "ngForOf"], [1, "card-tiles"], [2, "color", "rgb(100, 100, 100)"], [2, "float", "right", "color", "rgb(63, 63, 63)"]], template: function TopFiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Top 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Highest avg age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TopFiveComponent_div_9_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lowest avg age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TopFiveComponent_div_14_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lowest);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #694598;\n    font-size: 22px;\n    margin: 0;\n    padding: 25px;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #000000;\n    font-size: 15px;\n    margin-bottom: 7px;\n}\n\nhr[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 24px;\n}\n\n.row-score[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n    margin-bottom: 18px;\n}\n\n.column[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n    padding: 0px 18px;\n}\n\n.group-tiles[_ngcontent-%COMP%] {\nbackground-color: #e7e1e6;\n   border-radius: 6px;\n   padding: 1px 3px 1px 3px;\n\n}\n\n.card-tiles[_ngcontent-%COMP%] {\n    cursor: pointer;\n   background-color: white; \n   border-radius: 4px;\n   height: 35px;\n   margin-top: 2px;\n   margin-bottom: 2px;\n   padding-left: 15px; \n   padding-right: 15px;\n   line-height: 35px;\n   font-size: 13px;\n}\n\n.card-tiles[_ngcontent-%COMP%]:hover {\n    border: 1px solid #c50341;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1maXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtBQUNBLHlCQUF5QjtHQUN0QixrQkFBa0I7R0FDbEIsd0JBQXdCOztBQUUzQjs7QUFFQTtJQUNJLGVBQWU7R0FDaEIsdUJBQXVCO0dBQ3ZCLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsbUJBQW1CO0dBQ25CLGlCQUFpQjtHQUNqQixlQUFlO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InRvcC1maXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM2OTQ1OTg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuaHIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnJvdy1zY29yZTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uY29sdW1uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDBweCAxOHB4O1xufVxuXG4uZ3JvdXAtdGlsZXMge1xuYmFja2dyb3VuZC1jb2xvcjogI2U3ZTFlNjtcbiAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgIHBhZGRpbmc6IDFweCAzcHggMXB4IDNweDtcblxufVxuXG4uY2FyZC10aWxlcyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgaGVpZ2h0OiAzNXB4O1xuICAgbWFyZ2luLXRvcDogMnB4O1xuICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgcGFkZGluZy1sZWZ0OiAxNXB4OyBcbiAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNhcmQtdGlsZXM6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNTAzNDE7XG59XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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