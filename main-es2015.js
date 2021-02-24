(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RS_school\My projects\UPWork\UPwork1\src\main.ts */"zUnb");


/***/ }),

/***/ "1OnI":
/*!**********************************************!*\
  !*** ./src/app/nav-var/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class NavBarComponent {
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["nav-var"]], decls: 1, vars: 0, template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Navigation ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nav-var',
                template: `
    Navigation
  `
            }]
    }], null, null); })();


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

/***/ "E4Ix":
/*!***************************************************!*\
  !*** ./src/app/calculator/card-holder.service.ts ***!
  \***************************************************/
/*! exports provided: CardHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHolder", function() { return CardHolder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.service */ "vvJJ");



class CardHolder {
    constructor(imageIds = [], index) {
        this.imageIds = imageIds;
        this.index = index;
        this.cards = [];
        this.cards = this.imageIds.map(id => new _card_service__WEBPACK_IMPORTED_MODULE_1__["Card"](id));
        this.equity = null;
    }
    class() {
        return this.index === -1 ? 'board-label' : 'category-label';
    }
    label() {
        const playerId = this.index + 1;
        if (this.index === -1) {
            return { name: 'Board', id: 'board', playerId: 'board' };
        }
        if (this.isHero()) {
            return { name: 'Hero', id: 'hero', playerId: playerId };
        }
        else {
            return { name: `P. ${this.index}`, id: ('villain' + this.index.toString()), playerId: playerId };
        }
    }
    isHero() {
        return this.index == 0;
    }
    exportValues() {
        return this.cards.map(c => c.serverValue()).filter(a => a);
    }
}
CardHolder.ɵfac = function CardHolder_Factory(t) { return new (t || CardHolder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('imageIds'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('isHero')); };
CardHolder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardHolder, factory: CardHolder.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardHolder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['imageIds']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['isHero']
            }] }]; }, null); })();


/***/ }),

/***/ "LkI3":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator.service */ "nhOS");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-responsive-carousel */ "T6vt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _card_holder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-holder.component */ "s2wp");






const _c0 = ["myCarousel"];
function CalculatorComponent_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_div_12_span_2_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r5 = ctx.$implicit; const suit_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.calculator.selectCard(i_r5, suit_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const suit_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", ctx_r4.calculator.selectedCards[i_r5 + suit_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("deck-card ", i_r5, "", suit_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", i_r5, "", suit_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.calculator.cardToSrc(i_r5 + suit_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CalculatorComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalculatorComponent_div_12_span_2_Template, 2, 9, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.calculator.cardIndices);
} }
function CalculatorComponent_li_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_li_15_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r12 = ctx.$implicit; const suit_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.calculator.selectCard(i_r12, suit_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.$implicit;
    const suit_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invisible", ctx_r11.calculator.selectedCards[i_r12 + suit_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("deck-card ", i_r12, "", suit_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "", i_r12, "", suit_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.calculator.cardToSrc(i_r12 + suit_r10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CalculatorComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalculatorComponent_li_15_div_1_Template, 2, 9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.calculator.cardIndices);
} }
function CalculatorComponent_card_holder_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card-holder", 21);
} if (rf & 2) {
    const player_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calculator", ctx_r2.calculator)("player", player_r17);
} }
class CalculatorComponent {
    constructor() {
        this.currentSuitSelected = 0;
    }
    toCdn(file) {
        return cdnUrl[file] || file;
    }
    ngOnInit() {
        this.calculator = new _calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalculatorService"]();
    }
    moveToIndex(i) {
        Array.from(document.getElementsByClassName('carousel-dot')).forEach((suitIndicator, index) => {
            if (Array.from(suitIndicator.classList).find(i => i == 'carousel-dot-active')) {
                this.currentSuitSelected = index;
            }
        });
        let className;
        if (i < this.currentSuitSelected) {
            className = 'carousel-arrow-prev';
        }
        else {
            className = 'carousel-arrow-next';
        }
        let element = document.getElementsByClassName(className)[0];
        this.clickDelay(element, Math.abs(this.currentSuitSelected - i));
    }
    clickDelay(element, times) {
        if (times == 0)
            return;
        element.click();
        setTimeout(() => {
            this.clickDelay(element, times - 1);
        }, 100);
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["calculator"]], viewQuery: function CalculatorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myCarousel = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalculatorService"]])], decls: 43, vars: 24, consts: [["id", "calc-wrapper"], ["id", "cards-to-select-mobile"], ["id", "suits"], ["id", "hearts", 1, "left", "suit-select"], [3, "src", "click"], ["id", "diamonds", 1, "left", "suit-select"], ["id", "spades", 1, "left", "suit-select"], ["id", "clubs", 1, "left", "suit-select"], ["cellsToShow", "1", "height", "255", "transitionDuration", "10", 3, "arrows", "dots", "arrowsOutside"], [4, "ngFor", "ngForOf"], ["id", "cards-to-select"], [1, "cards-to-select-wrapper"], ["class", "card-list", 4, "ngFor", "ngForOf"], ["id", "add-player"], [1, "calc-btn", "add-player-btn", 3, "disabled", "click"], ["id", "board"], ["id", "board-bg"], ["id", "board-content"], ["id", "board-grid"], [3, "calculator", "player", 4, "ngFor", "ngForOf"], ["id", "add-player-mobile"], [3, "calculator", "player"], ["id", "actions"], ["id", "twice-wrapper", 1, "left"], ["id", "run-twice", 1, "calc-btn", 3, "disabled", "click"], ["id", "three-wrapper", 1, "left"], ["id", "run-three", 1, "calc-btn", 3, "disabled", "click"], [1, "clear"], ["id", "results"], [1, "carousel-cell"], ["class", "deck-card-wrapper left", 3, "invisible", 4, "ngFor", "ngForOf"], [1, "deck-card-wrapper", "left"], [3, "id", "src", "click"], [1, "card-list"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_img_click_4_listener() { return ctx.moveToIndex(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_img_click_6_listener() { return ctx.moveToIndex(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_img_click_8_listener() { return ctx.moveToIndex(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_img_click_10_listener() { return ctx.moveToIndex(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "carousel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CalculatorComponent_div_12_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CalculatorComponent_li_15_Template, 3, 1, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_17_listener() { return ctx.calculator.addNewPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " + Add player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CalculatorComponent_card_holder_24_Template, 1, 2, "card-holder", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_26_listener() { return ctx.calculator.addNewPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " + Add player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "card-holder", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_32_listener() { return ctx.calculator.sendAjaxAndSetResults(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Run it twice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_36_listener() { return ctx.calculator.sendAjaxAndSetResults(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Run it three times");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " *depending on amount missing cards, percentage may be an approximation only (up to ~0.5% diff on a full missing board) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toCdn("assets/images/heart.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toCdn("assets/images/diamond.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toCdn("assets/images/spade.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.toCdn("assets/images/club.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrows", true)("dots", true)("arrowsOutside", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculator.suits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculator.suits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-btn", ctx.calculator.isPlayersLimitReached());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.calculator.isPlayersLimitReached());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calculator.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-btn", ctx.calculator.isPlayersLimitReached());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.calculator.isPlayersLimitReached());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("calculator", ctx.calculator)("player", ctx.calculator.board);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-btn", !ctx.calculator.validData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.calculator.validData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled-btn", !ctx.calculator.validData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.calculator.validData);
    } }, directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_holder_component__WEBPACK_IMPORTED_MODULE_4__["CardHolderComponent"]], styles: ["[_nghost-%COMP%]     carousel .carousel-arrows{\r\n    visibility: hidden;\r\n}\r\n\r\n[_nghost-%COMP%]     carousel .carousel-dots{\r\n    visibility: hidden;\r\n}\r\n\r\n[_nghost-%COMP%]     carousel .carousel-cells .carousel-cell {\r\n    height: 500px;\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n#suits[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#cards-to-select-mobile[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n}\r\n\r\n#calc-wrapper[_ngcontent-%COMP%] {\r\n    background-image: url('https://i.yapx.ru/LM6Dv.jpg');\r\n}\r\n\r\n.cards-to-select-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card-list[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n\r\n}\r\n\r\n#board[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 20px 0px 25px calc((100% - 759px) * 0.5);\r\n    left: 8px;\r\n    grid-area: 7 / 1 / 11 / 2;\r\n    justify-self: start;\r\n    align-self: start;\r\n}\r\n\r\n#board-bg[_ngcontent-%COMP%] {\r\n    border: 8px solid #2b074d;\r\n    background-color: rgba(255, 255, 255, 0.36);\r\n    border-radius: 200px;\r\n    position: absolute;\r\n    width: 759px;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n#board-content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 792px;\r\n    position: relative;\r\n}\r\n\r\n#board-grid[_ngcontent-%COMP%] {\r\n    position: static;\r\n    height: auto;\r\n    width: 100%;\r\n    min-height: 432px;\r\n}\r\n\r\n#add-player-mobile[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n#add-player[_ngcontent-%COMP%]   .add-player-btn[_ngcontent-%COMP%] {\r\n     background-color: #3333; \r\n}\r\n\r\n#add-player[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nbutton.add-player-btn[_ngcontent-%COMP%] {\r\n    font-size: 12px ;\r\n    width:225px;\r\n    display:block;\r\n    border:1px solid #fff;\r\n    margin: 20px auto;\r\n    font-family: 'Dosis', sans;\r\n    font-weight:200;\r\n    text-transform:uppercase;\r\n    text-decoration:none;\r\n    text-align:center;\r\n    opacity:.8;\r\n    letter-spacing: 1px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\nbutton.add-player-btn[_ngcontent-%COMP%]:hover {\r\n    padding: 21px 40px 19px;\r\n    width:225px;\r\n    border:1px solid teal;\r\n    margin: 20px auto;\r\n    opacity:1;\r\n    letter-spacing: 4px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 20px 40px;\r\n    color: white;\r\n    \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]::before {\r\n    bottom: -15px;\r\n    height: 15px;\r\n    width: 100%;\r\n    left: 8px;\r\n    transform: skewX(45deg);\r\n    background-color: #196090;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]::after {\r\n    right: -15px;\r\n    height: 100%;\r\n    width: 15px;\r\n    bottom: -8px;\r\n    transform: skewY(45deg);\r\n    background-color: #124364;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active {\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active::before {\r\n    bottom: -5px;\r\n    height: 5px;\r\n    left: 3px;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active::after {\r\n    right: -5px;\r\n    width: 5px;\r\n    bottom: -3px;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-bottom: 4rem;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]{\r\n    background-color: #3333; \r\n    margin: 0 1rem;\r\n    font-size: 12px ;\r\n    width:320px;\r\n    display:block;\r\n    border:1px solid #fff;\r\n    font-family: 'Dosis', sans;\r\n    font-weight:200;\r\n    text-transform:uppercase;\r\n    text-decoration:none;\r\n    text-align:center;\r\n    opacity:.8;\r\n    letter-spacing: 1px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:hover{\r\n    padding: 21px 40px 19px;\r\n    width:320px;\r\n    border:1px solid teal;\r\n    opacity:1;\r\n    letter-spacing: 4px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 50px;\r\n}\r\n\r\n.deck-card-wrapper[_ngcontent-%COMP%] {\r\n    padding: 4px !important;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n    #suits[_ngcontent-%COMP%] {\r\n        height: 40px;\r\n        display: block;\r\n    }\r\n\r\n    .suit-select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n        height: 25px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        display: block;\r\n    }\r\n\r\n    .suit-select[_ngcontent-%COMP%] {\r\n        opacity: 0.6;\r\n        box-shadow: 0 2px 5px 4px rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n        margin: 0 2px 0 2px;\r\n        width: calc(25% - 8px);\r\n        background-color: dimgray;\r\n        border: 2px outset currentColor;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        font-size: 10px;\r\n    }\r\n\r\n    #cards-to-select-mobile[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        width: 100%;\r\n    }\r\n\r\n    #subtitle[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .card-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    #board-bg[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    #board[_ngcontent-%COMP%] {\r\n        margin: 2px;\r\n    }\r\n\r\n    #board-grid[_ngcontent-%COMP%] {\r\n        min-height: 0px;\r\n    }\r\n\r\n    #board-content[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    #actions[_ngcontent-%COMP%] {\r\n        margin: 70px 0 0 0;\r\n    }\r\n\r\n    #twice-wrapper[_ngcontent-%COMP%] {\r\n        margin-right: 30px;\r\n    }\r\n\r\n    #three-wrapper[_ngcontent-%COMP%] {\r\n        float: right;\r\n    }\r\n\r\n    .calc-btn[_ngcontent-%COMP%] {\r\n        padding: 10px 20px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #actions[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n\r\n    #cards-to-select[_ngcontent-%COMP%] {\r\n        display: none;\r\n        \r\n    }\r\n\r\n    \r\n    .card-list[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n\r\n    .animate[_ngcontent-%COMP%] {\r\n        transition: transform 0.3s ease-out;\r\n    }\r\n\r\n    #cards-to-select-mobile[_ngcontent-%COMP%] {\r\n        height: 270px;\r\n        position: relative;\r\n    }\r\n\r\n    .slider-wrap[_ngcontent-%COMP%] {\r\n        width: 360px;\r\n        height: 500px;\r\n        position: absolute;\r\n        margin-left: 20px;\r\n    }\r\n\r\n    .slider[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .ms-touch.slider[_ngcontent-%COMP%] {\r\n        overflow-x: scroll;\r\n        overflow-y: hidden;\r\n\r\n        -ms-overflow-style: none;\r\n        -ms-scroll-chaining: none;\r\n        -ms-scroll-snap-type: mandatory;\r\n        -ms-scroll-snap-points-x: snapInterval(0%, 100%);\r\n    }\r\n\r\n    .holder[_ngcontent-%COMP%] {\r\n        width: 400%;\r\n        max-height: 500px;\r\n        height: 100%;\r\n        overflow-y: hidden;\r\n    }\r\n\r\n    .slide-wrapper[_ngcontent-%COMP%] {\r\n        width: 25%;\r\n        height: 100%;\r\n        float: left;\r\n        height: 500px;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n\r\n    .temp[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        z-index: 1;\r\n        color: white;\r\n        font-size: 100px;\r\n        bottom: 15px;\r\n        left: 15px;\r\n        font-family: 'Josefin Slab', serif;\r\n        font-weight: 100;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%]:before {\r\n        content: \"\";\r\n        position: absolute;\r\n        z-index: 1;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 40%;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        height: 500px;\r\n        z-index: 0;\r\n    }\r\n\r\n    #add-player-mobile[_ngcontent-%COMP%]   .add-player-btn[_ngcontent-%COMP%] {\r\n        background-color: #3333;\r\n    }\r\n\r\n    #add-player[_ngcontent-%COMP%] {\r\n        visibility: hidden;\r\n    }\r\n    #add-player-mobile[_ngcontent-%COMP%] {\r\n        visibility: visible;\r\n        width: 100%;\r\n        height: 50px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .deck-card-wrapper[_ngcontent-%COMP%] {\r\n        padding: 9px !important;\r\n    }\r\n}\r\n\r\nimg.deck-card[_ngcontent-%COMP%] {\r\n    height: 55px !important;\r\n    width: auto !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBZ0Q7SUFDaEQsU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtLQUNLLHVCQUF1QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJB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eUI7UUFDekIsK0JBQStCO1FBQy9CLGdEQUFnRDtJQUNwRDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osVUFBVTtRQUNWLGtDQUFrQztRQUNsQyxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixTQUFTO1FBQ1QsT0FBTztRQUNQLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCBjYXJvdXNlbCAuY2Fyb3VzZWwtYXJyb3dze1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgY2Fyb3VzZWwgLmNhcm91c2VsLWRvdHN7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBjYXJvdXNlbCAuY2Fyb3VzZWwtY2VsbHMgLmNhcm91c2VsLWNlbGwge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmludmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbiNzdWl0cyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jY2FyZHMtdG8tc2VsZWN0LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3N1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4jY2FsYy13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pLnlhcHgucnUvTE02RHYuanBnJyk7XHJcbn1cclxuXHJcbi5jYXJkcy10by1zZWxlY3Qtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxufVxyXG5cclxuI2JvYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjVweCBjYWxjKCgxMDAlIC0gNzU5cHgpICogMC41KTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGdyaWQtYXJlYTogNyAvIDEgLyAxMSAvIDI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbiNib2FyZC1iZyB7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMmIwNzRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc1OXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jYm9hcmQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzkycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNib2FyZC1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQzMnB4O1xyXG59XHJcblxyXG4jYWRkLXBsYXllci1tb2JpbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jYWRkLXBsYXllciAuYWRkLXBsYXllci1idG4ge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzOyBcclxufVxyXG5cclxuI2FkZC1wbGF5ZXIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uLmFkZC1wbGF5ZXItYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCA7XHJcbiAgICB3aWR0aDoyMjVweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG9wYWNpdHk6Ljg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTsgLyogbGluZWFyICovXHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQtcGxheWVyLWJ0bjpob3ZlciB7XHJcbiAgICBwYWRkaW5nOiAyMXB4IDQwcHggMTlweDtcclxuICAgIHdpZHRoOjIyNXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB0ZWFsO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTsgLyogbGluZWFyICovXHJcbn1cclxuXHJcbi5jYWxjLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMCUsIDIwJSk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgKi9cclxufVxyXG5cclxuLmNhbGMtYnRuOjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAtMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2MDkwO1xyXG59XHJcblxyXG4uY2FsYy1idG46OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYm90dG9tOiAtOHB4O1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSg0NWRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI0MzY0O1xyXG59XHJcblxyXG4uY2FsYy1idG46YWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhbGMtYnRuOmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgbGVmdDogM3B4O1xyXG59XHJcblxyXG4uY2FsYy1idG46YWN0aXZlOjphZnRlciB7XHJcbiAgICByaWdodDogLTVweDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBib3R0b206IC0zcHg7XHJcbn1cclxuXHJcbiNhY3Rpb25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbn1cclxuXHJcbi5jYWxjLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzOyBcclxuICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxMnB4IDtcclxuICAgIHdpZHRoOjMyMHB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG9wYWNpdHk6Ljg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTsgLyogbGluZWFyICovXHJcbn1cclxuXHJcbi5jYWxjLWJ0bjpob3ZlcntcclxuICAgIHBhZGRpbmc6IDIxcHggNDBweCAxOXB4O1xyXG4gICAgd2lkdGg6MzIwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRlYWw7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTsgLyogbGluZWFyICovXHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmRlY2stY2FyZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBtb2JpbGUgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICNzdWl0cyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWl0LXNlbGVjdCBpbWcge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWl0LXNlbGVjdCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCA0cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgMnB4IDAgMnB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDhweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcclxuICAgICAgICBib3JkZXI6IDJweCBvdXRzZXQgY3VycmVudENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjYXJkcy10by1zZWxlY3QtbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1YnRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNib2FyZC1iZyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAjYm9hcmQge1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICNib2FyZC1ncmlkIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2JvYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNhY3Rpb25zIHtcclxuICAgICAgICBtYXJnaW46IDcwcHggMCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgI3R3aWNlLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAjdGhyZWUtd3JhcHBlciB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxjLWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICNjYXJkcy10by1zZWxlY3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyogc2xpZGVyIGFkZGl0aW9ucyovXHJcbiAgICAuY2FyZC1saXN0IHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFuaW1hdGUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG5cclxuICAgICNjYXJkcy10by1zZWxlY3QtbW9iaWxlIHtcclxuICAgICAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLXdyYXAge1xyXG4gICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAubXMtdG91Y2guc2xpZGVyIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cclxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgLW1zLXNjcm9sbC1jaGFpbmluZzogbm9uZTtcclxuICAgICAgICAtbXMtc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xyXG4gICAgICAgIC1tcy1zY3JvbGwtc25hcC1wb2ludHMteDogc25hcEludGVydmFsKDAlLCAxMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9sZGVyIHtcclxuICAgICAgICB3aWR0aDogNDAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZS13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAudGVtcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWInLCBzZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlIGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxuXHJcbiAgICAjYWRkLXBsYXllci1tb2JpbGUgLmFkZC1wbGF5ZXItYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMztcclxuICAgIH1cclxuXHJcbiAgICAjYWRkLXBsYXllciB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgI2FkZC1wbGF5ZXItbW9iaWxlIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWNrLWNhcmQtd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZy5kZWNrLWNhcmQge1xyXG4gICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'calculator',
                templateUrl: './calculator.component.html',
                styleUrls: ['./calculator.component.css'],
                providers: [_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalculatorService"]]
            }]
    }], null, { myCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myCarousel', { static: false }]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__["CalculatorComponent"]], styles: ["app-root[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], #body[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n    height: 100%;\r\n\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], #body[_ngcontent-%COMP%] {\r\n        overflow-x: hidden;\r\n        height: 100%;\r\n\r\n    }\r\n\r\n    body[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        padding: 0;\r\n        overflow: hidden;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZOztJQUVoQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCOztBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXJvb3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHksICNib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGh0bWwsIGJvZHksICNib2R5IHtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
<!--    <nav-var></nav-var>-->
<div id="body">
    <calculator></calculator>
</div>
  `,
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-responsive-carousel */ "T6vt");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_var_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-var/nav-bar.component */ "1OnI");
/* harmony import */ var _calculator_card_holder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator/card-holder.component */ "s2wp");
/* harmony import */ var _calculator_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculator/card.component */ "a2OW");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__["CalculatorComponent"],
        _calculator_card_holder_component__WEBPACK_IMPORTED_MODULE_6__["CardHolderComponent"],
        _calculator_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _nav_var_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__["CalculatorComponent"],
                    _calculator_card_holder_component__WEBPACK_IMPORTED_MODULE_6__["CardHolderComponent"],
                    _calculator_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                    _nav_var_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a2OW":
/*!**********************************************!*\
  !*** ./src/app/calculator/card.component.ts ***!
  \**********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class CardComponent {
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["card"]], inputs: { card: "card", calculator: "calculator" }, decls: 2, vars: 2, consts: [[1, "deck-card-wrapper", "left", 3, "id"], [1, "deck-card", 3, "src", "click"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_img_click_1_listener() { return ctx.calculator.deselect(ctx.card); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.card.imageId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.card.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%]     carousel .carousel-arrows{\r\n    visibility: hidden;\r\n}\r\n\r\n[_nghost-%COMP%]     carousel .carousel-dots{\r\n    visibility: hidden;\r\n}\r\n\r\n[_nghost-%COMP%]     carousel .carousel-cells .carousel-cell {\r\n    height: 500px;\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n#suits[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#cards-to-select-mobile[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#subtitle[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n}\r\n\r\n#calc-wrapper[_ngcontent-%COMP%] {\r\n    background-image: url('https://i.yapx.ru/LM6Dv.jpg');\r\n}\r\n\r\n.cards-to-select-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card-list[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.clear[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n\r\n}\r\n\r\n#board[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 20px 0px 25px calc((100% - 759px) * 0.5);\r\n    left: 8px;\r\n    grid-area: 7 / 1 / 11 / 2;\r\n    justify-self: start;\r\n    align-self: start;\r\n}\r\n\r\n#board-bg[_ngcontent-%COMP%] {\r\n    border: 8px solid #2b074d;\r\n    background-color: rgba(255, 255, 255, 0.36);\r\n    border-radius: 200px;\r\n    position: absolute;\r\n    width: 759px;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n}\r\n\r\n#board-content[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    width: 792px;\r\n    position: relative;\r\n}\r\n\r\n#board-grid[_ngcontent-%COMP%] {\r\n    position: static;\r\n    height: auto;\r\n    width: 100%;\r\n    min-height: 432px;\r\n}\r\n\r\n#add-player-mobile[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n#add-player[_ngcontent-%COMP%]   .add-player-btn[_ngcontent-%COMP%] {\r\n     background-color: #3333; \r\n}\r\n\r\n#add-player[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nbutton.add-player-btn[_ngcontent-%COMP%] {\r\n    font-size: 12px ;\r\n    width:225px;\r\n    display:block;\r\n    border:1px solid #fff;\r\n    margin: 20px auto;\r\n    font-family: 'Dosis', sans;\r\n    font-weight:200;\r\n    text-transform:uppercase;\r\n    text-decoration:none;\r\n    text-align:center;\r\n    opacity:.8;\r\n    letter-spacing: 1px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\nbutton.add-player-btn[_ngcontent-%COMP%]:hover {\r\n    padding: 21px 40px 19px;\r\n    width:225px;\r\n    border:1px solid teal;\r\n    margin: 20px auto;\r\n    opacity:1;\r\n    letter-spacing: 4px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 20px 40px;\r\n    color: white;\r\n    \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]::before {\r\n    bottom: -15px;\r\n    height: 15px;\r\n    width: 100%;\r\n    left: 8px;\r\n    transform: skewX(45deg);\r\n    background-color: #196090;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]::after {\r\n    right: -15px;\r\n    height: 100%;\r\n    width: 15px;\r\n    bottom: -8px;\r\n    transform: skewY(45deg);\r\n    background-color: #124364;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active {\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active::before {\r\n    bottom: -5px;\r\n    height: 5px;\r\n    left: 3px;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:active::after {\r\n    right: -5px;\r\n    width: 5px;\r\n    bottom: -3px;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-bottom: 4rem;\r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]{\r\n    background-color: #3333; \r\n    margin: 0 1rem;\r\n    font-size: 12px ;\r\n    width:320px;\r\n    display:block;\r\n    border:1px solid #fff;\r\n    font-family: 'Dosis', sans;\r\n    font-weight:200;\r\n    text-transform:uppercase;\r\n    text-decoration:none;\r\n    text-align:center;\r\n    opacity:.8;\r\n    letter-spacing: 1px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.calc-btn[_ngcontent-%COMP%]:hover{\r\n    padding: 21px 40px 19px;\r\n    width:320px;\r\n    border:1px solid teal;\r\n    opacity:1;\r\n    letter-spacing: 4px;\r\n    transition: all 300ms cubic-bezier(0.250, 0.250, 0.750, 0.750); \r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 50px;\r\n}\r\n\r\n.deck-card-wrapper[_ngcontent-%COMP%] {\r\n    padding: 4px !important;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n    #suits[_ngcontent-%COMP%] {\r\n        height: 40px;\r\n        display: block;\r\n    }\r\n\r\n    .suit-select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n        height: 25px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        display: block;\r\n    }\r\n\r\n    .suit-select[_ngcontent-%COMP%] {\r\n        opacity: 0.6;\r\n        box-shadow: 0 2px 5px 4px rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n        margin: 0 2px 0 2px;\r\n        width: calc(25% - 8px);\r\n        background-color: dimgray;\r\n        border: 2px outset currentColor;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        font-size: 10px;\r\n    }\r\n\r\n    #cards-to-select-mobile[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        width: 100%;\r\n    }\r\n\r\n    #subtitle[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .card-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    #board-bg[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    #board[_ngcontent-%COMP%] {\r\n        margin: 2px;\r\n    }\r\n\r\n    #board-grid[_ngcontent-%COMP%] {\r\n        min-height: 0px;\r\n    }\r\n\r\n    #board-content[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    #actions[_ngcontent-%COMP%] {\r\n        margin: 70px 0 0 0;\r\n    }\r\n\r\n    #twice-wrapper[_ngcontent-%COMP%] {\r\n        margin-right: 30px;\r\n    }\r\n\r\n    #three-wrapper[_ngcontent-%COMP%] {\r\n        float: right;\r\n    }\r\n\r\n    .calc-btn[_ngcontent-%COMP%] {\r\n        padding: 10px 20px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #actions[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n\r\n    #cards-to-select[_ngcontent-%COMP%] {\r\n        display: none;\r\n        \r\n    }\r\n\r\n    \r\n    .card-list[_ngcontent-%COMP%] {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n\r\n    .animate[_ngcontent-%COMP%] {\r\n        transition: transform 0.3s ease-out;\r\n    }\r\n\r\n    #cards-to-select-mobile[_ngcontent-%COMP%] {\r\n        height: 270px;\r\n        position: relative;\r\n    }\r\n\r\n    .slider-wrap[_ngcontent-%COMP%] {\r\n        width: 360px;\r\n        height: 500px;\r\n        position: absolute;\r\n        margin-left: 20px;\r\n    }\r\n\r\n    .slider[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .ms-touch.slider[_ngcontent-%COMP%] {\r\n        overflow-x: scroll;\r\n        overflow-y: hidden;\r\n\r\n        -ms-overflow-style: none;\r\n        -ms-scroll-chaining: none;\r\n        -ms-scroll-snap-type: mandatory;\r\n        -ms-scroll-snap-points-x: snapInterval(0%, 100%);\r\n    }\r\n\r\n    .holder[_ngcontent-%COMP%] {\r\n        width: 400%;\r\n        max-height: 500px;\r\n        height: 100%;\r\n        overflow-y: hidden;\r\n    }\r\n\r\n    .slide-wrapper[_ngcontent-%COMP%] {\r\n        width: 25%;\r\n        height: 100%;\r\n        float: left;\r\n        height: 500px;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n\r\n    .temp[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        z-index: 1;\r\n        color: white;\r\n        font-size: 100px;\r\n        bottom: 15px;\r\n        left: 15px;\r\n        font-family: 'Josefin Slab', serif;\r\n        font-weight: 100;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%]:before {\r\n        content: \"\";\r\n        position: absolute;\r\n        z-index: 1;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 40%;\r\n    }\r\n\r\n    .slide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        height: 500px;\r\n        z-index: 0;\r\n    }\r\n\r\n    #add-player-mobile[_ngcontent-%COMP%]   .add-player-btn[_ngcontent-%COMP%] {\r\n        background-color: #3333;\r\n    }\r\n\r\n    #add-player[_ngcontent-%COMP%] {\r\n        visibility: hidden;\r\n    }\r\n    #add-player-mobile[_ngcontent-%COMP%] {\r\n        visibility: visible;\r\n        width: 100%;\r\n        height: 50px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .deck-card-wrapper[_ngcontent-%COMP%] {\r\n        padding: 9px !important;\r\n    }\r\n}\r\n\r\nimg.deck-card[_ngcontent-%COMP%] {\r\n    height: 55px !important;\r\n    width: auto !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBZ0Q7SUFDaEQsU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtLQUNLLHVCQUF1QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJB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eUI7UUFDekIsK0JBQStCO1FBQy9CLGdEQUFnRDtJQUNwRDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osVUFBVTtRQUNWLGtDQUFrQztRQUNsQyxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixTQUFTO1FBQ1QsT0FBTztRQUNQLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCBjYXJvdXNlbCAuY2Fyb3VzZWwtYXJyb3dze1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgY2Fyb3VzZWwgLmNhcm91c2VsLWRvdHN7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBjYXJvdXNlbCAuY2Fyb3VzZWwtY2VsbHMgLmNhcm91c2VsLWNlbGwge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmludmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbiNzdWl0cyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jY2FyZHMtdG8tc2VsZWN0LW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3N1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4jY2FsYy13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pLnlhcHgucnUvTE02RHYuanBnJyk7XHJcbn1cclxuXHJcbi5jYXJkcy10by1zZWxlY3Qtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxufVxyXG5cclxuI2JvYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMjVweCBjYWxjKCgxMDAlIC0gNzU5cHgpICogMC41KTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGdyaWQtYXJlYTogNyAvIDEgLyAxMSAvIDI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbiNib2FyZC1iZyB7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMmIwNzRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc1OXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jYm9hcmQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzkycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNib2FyZC1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQzMnB4O1xyXG59XHJcblxyXG4jYWRkLXBsYXllci1tb2JpbGUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jYWRkLXBsYXllciAuYWRkLXBsYXllci1idG4ge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzOyBcclxufVxyXG5cclxuI2FkZC1wbGF5ZXIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uLmFkZC1wbGF5ZXItYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCA7XHJcbiAgICB3aWR0aDoyMjVweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG9wYWNpdHk6Ljg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTsgLyogbGluZWFyICovXHJcbn1cclxuXHJcbmJ1dHRvbi5hZGQtcGxheWVyLWJ0bjpob3ZlciB7XHJcbiAgICBwYWRkaW5nOiAyMXB4IDQwcHggMTlweDtcclxuICAgIHdpZHRoOjIyNXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB0ZWFsO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTsgLyogbGluZWFyICovXHJcbn1cclxuXHJcbi5jYWxjLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMCUsIDIwJSk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgKi9cclxufVxyXG5cclxuLmNhbGMtYnRuOjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAtMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2MDkwO1xyXG59XHJcblxyXG4uY2FsYy1idG46OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYm90dG9tOiAtOHB4O1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSg0NWRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI0MzY0O1xyXG59XHJcblxyXG4uY2FsYy1idG46YWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhbGMtYnRuOmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgbGVmdDogM3B4O1xyXG59XHJcblxyXG4uY2FsYy1idG46YWN0aXZlOjphZnRlciB7XHJcbiAgICByaWdodDogLTVweDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBib3R0b206IC0zcHg7XHJcbn1cclxuXHJcbiNhY3Rpb25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbn1cclxuXHJcbi5jYWxjLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzOyBcclxuICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxMnB4IDtcclxuICAgIHdpZHRoOjMyMHB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6MjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG9wYWNpdHk6Ljg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTsgLyogbGluZWFyICovXHJcbn1cclxuXHJcbi5jYWxjLWJ0bjpob3ZlcntcclxuICAgIHBhZGRpbmc6IDIxcHggNDBweCAxOXB4O1xyXG4gICAgd2lkdGg6MzIwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRlYWw7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTtcclxuICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApO1xyXG4gICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjI1MCwgMC4yNTAsIDAuNzUwLCAwLjc1MCk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKTsgLyogbGluZWFyICovXHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmRlY2stY2FyZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBtb2JpbGUgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICNzdWl0cyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWl0LXNlbGVjdCBpbWcge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWl0LXNlbGVjdCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCA0cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgMnB4IDAgMnB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDhweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcclxuICAgICAgICBib3JkZXI6IDJweCBvdXRzZXQgY3VycmVudENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjYXJkcy10by1zZWxlY3QtbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3N1YnRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNib2FyZC1iZyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAjYm9hcmQge1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICNib2FyZC1ncmlkIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2JvYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICNhY3Rpb25zIHtcclxuICAgICAgICBtYXJnaW46IDcwcHggMCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgI3R3aWNlLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAjdGhyZWUtd3JhcHBlciB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWxjLWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWN0aW9ucyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICNjYXJkcy10by1zZWxlY3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyogc2xpZGVyIGFkZGl0aW9ucyovXHJcbiAgICAuY2FyZC1saXN0IHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFuaW1hdGUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG5cclxuICAgICNjYXJkcy10by1zZWxlY3QtbW9iaWxlIHtcclxuICAgICAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLXdyYXAge1xyXG4gICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAubXMtdG91Y2guc2xpZGVyIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cclxuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgLW1zLXNjcm9sbC1jaGFpbmluZzogbm9uZTtcclxuICAgICAgICAtbXMtc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xyXG4gICAgICAgIC1tcy1zY3JvbGwtc25hcC1wb2ludHMteDogc25hcEludGVydmFsKDAlLCAxMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9sZGVyIHtcclxuICAgICAgICB3aWR0aDogNDAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZS13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAudGVtcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWInLCBzZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlIGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxuXHJcbiAgICAjYWRkLXBsYXllci1tb2JpbGUgLmFkZC1wbGF5ZXItYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMztcclxuICAgIH1cclxuXHJcbiAgICAjYWRkLXBsYXllciB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgI2FkZC1wbGF5ZXItbW9iaWxlIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWNrLWNhcmQtd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZy5kZWNrLWNhcmQge1xyXG4gICAgaGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'card',
                templateUrl: './card.component.html',
                styleUrls: ['./calculator.component.css']
            }]
    }], null, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calculator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nhOS":
/*!**************************************************!*\
  !*** ./src/app/calculator/calculator.service.ts ***!
  \**************************************************/
/*! exports provided: CalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorService", function() { return CalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _card_holder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-holder.service */ "E4Ix");



function toCdn(file) {
    return cdnUrl[file] || file;
}
class CalculatorService {
    constructor() {
        this.suits = ['H', 'D', 'S', 'C'];
        this.cardIndices = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.selectedCards = {};
        this.validData = false;
        this.players = [];
        this.ajaxCounter = 0;
        this.addPlayer(0);
        this.addPlayer(1);
        this.board = new _card_holder_service__WEBPACK_IMPORTED_MODULE_1__["CardHolder"](['board-1-card', 'board-2-card', 'board-3-card', 'board-4-card', 'board-5-card'], -1);
        this.resetSrc();
    }
    cardToSrc(cardIndex) {
        return toCdn(`assets/images/cards_zipped/${cardIndex}.png`);
    }
    nextCard() {
        return this.getAllCard().find((card) => !card.value);
    }
    addNewPlayer() {
        if (this.players.length < 5) {
            this.addPlayer(this.players.length);
        }
        this.resetBoard();
    }
    removePlayer(i) {
        this.players.splice(i, 1);
        this.resetBoard();
    }
    selectCard(i, suit) {
        const card = this.nextCard();
        if (card) {
            card.value = i + suit;
            this.selectedCards[card.value] = card;
            card.src = this.cardToSrc(i + suit); // TODO: bind runtime
            this.resetBoard();
        }
    }
    deselect(card) {
        delete this.selectedCards[card.value];
        card.deselect();
        this.resetBoard();
    }
    addPlayer(i) {
        this.players.push(new _card_holder_service__WEBPACK_IMPORTED_MODULE_1__["CardHolder"]([`player${i}-1-card`, `player${i}-2-card`], i));
    }
    // private
    sendAjax(times) {
        const params = {
            shared: this.board.exportValues(),
            times,
            deadCards: []
        };
        this.players.forEach((player, i) => {
            params[`cardsPlayer${i + 1}`] = player.exportValues();
        });
        const queryString = Object.keys(params).map(key => {
            if (Array.isArray(params[key])) {
                return params[key].map(arrValue => key + '[]=' + arrValue).join('&');
            }
            return key + '=' + params[key];
        }).join('&');
        return fetch("/api/multi-calc?" + queryString, { "method": "get" }).then(r => r.json());
    }
    initChart(chartData) {
        this.chart = anychart.column();
        // turn on chart animation
        this.chart.animation(true);
        // set chart title text settings
        this.chart.title('Running results');
        // create area series with passed data
        var series = this.chart.column(chartData);
        // set series tooltip settings
        series.tooltip().titleFormat('{%X}');
        series
            .tooltip()
            .position('center-top')
            .anchor('center-bottom')
            .offsetX(0)
            .offsetY(5)
            .format('%{%Value}{groupsSeparator: }');
        // set scale minimum
        this.chart.yScale().minimum(0);
        this.chart.yScale().maximum(100);
        // set yAxis labels formatter
        this.chart.yAxis().labels().format('%{%Value}{groupsSeparator: }');
        // tooltips position and interactivity settings
        this.chart.tooltip().positionMode('point');
        this.chart.interactivity().hoverMode('by-x');
        // axes titles
        this.chart.xAxis().title('Pot share');
        this.chart.yAxis().title('Frequency');
        // set container id for the chart
        this.chart.container('results');
        // initiate chart drawing
        this.chart.draw();
    }
    removeChart() {
        if (this.chart) {
            this.chart.remove();
        }
        document.getElementById('results').innerHTML = '';
    }
    sendAjaxAndSetResults(times) {
        this.removeChart();
        this.sendAjax(times).then(a => {
            const humanMapping = {
                '0': 'Nothing',
                '25': '¼ Pot',
                '75': '¾ Pot',
                '50': '½ Pot',
                '100': 'All pots',
                '33.33333333333333': '⅓ Pot',
                '16.666666666666664': '⅙ Pot',
                '66.66666666666666': '⅔ Pot',
                '83.33333333333334': '⅚ Pot'
            };
            if (Object.keys(a).length > 2) {
                Object.assign(humanMapping, {
                    '25': '1 split pot',
                    '75': '½ Pot + split pot',
                    '16.666666666666664': '1 split pot',
                    '83.33333333333334': '⅔ Pot + split pot'
                });
                if (times == 3) {
                    Object.assign(humanMapping, {
                        '50': '⅓ Pot + split pot',
                    });
                }
            }
            let text = 'Running results: \n';
            let chartData = [];
            Object.keys(a.cardsPlayer1.running).sort((a, b) => parseFloat(a) - parseFloat(b)).forEach(res => {
                chartData.push([(humanMapping[res] || (res + '% Pot')), a.cardsPlayer1.running[res]]);
                text += (humanMapping[res] || (res + '% Pot')) + ' is ' + a.cardsPlayer1.running[res] + '% '
                    + '\n';
            });
            this.initChart(chartData);
            document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        });
    }
    setEquity() {
        if (this.validData) {
            this.ajaxCounter++;
            const requestId = this.ajaxCounter;
            this.sendAjax(1).then(res => {
                // checking if this is the last ajax sent
                if (requestId == this.ajaxCounter) {
                    this.players.forEach((player, i) => {
                        const playerRes = res[`cardsPlayer${i + 1}`].running;
                        player.equity = { win: (playerRes[100] || '0'), tie: (playerRes[50] || '0') };
                    });
                }
            });
        }
        else {
            this.players.forEach(player => player.equity = null);
        }
    }
    resetIndexes() {
        this.players.forEach((player, i) => {
            player.index = i;
        });
    }
    resetBoard() {
        this.validData = this.players.every((player) => player.cards.every(c => c.value));
        this.resetIndexes();
        this.removeChart();
        this.resetSrc();
        this.setEquity();
    }
    resetSrc() {
        this.getAllCard().forEach((card) => {
            card.setSrc(this);
        });
    }
    isPlayersLimitReached() {
        return this.players.length >= 5;
    }
    getAllCard() {
        let allCards = [];
        this.players.forEach(p => {
            allCards = allCards.concat(p.cards);
        });
        return allCards.concat(this.board.cards);
    }
}
CalculatorService.ɵfac = function CalculatorService_Factory(t) { return new (t || CalculatorService)(); };
CalculatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalculatorService, factory: CalculatorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s2wp":
/*!*****************************************************!*\
  !*** ./src/app/calculator/card-holder.component.ts ***!
  \*****************************************************/
/*! exports provided: CardHolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHolderComponent", function() { return CardHolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "a2OW");




function CardHolderComponent_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardHolderComponent_div_1_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.calculator.removePlayer(ctx_r4.player.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.toCdn("assets/images/delete-icon.png"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardHolderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardHolderComponent_div_1_img_1_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.calculator.players.length > 2 && ctx_r0.player.index > 0);
} }
function CardHolderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r1.player.label().playerId, "-eq");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Win: ", ctx_r1.player.equity["win"], "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tie: ", ctx_r1.player.equity["tie"], "% ");
} }
function CardHolderComponent_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "card", 7);
} if (rf & 2) {
    const card_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r6)("calculator", ctx_r2.calculator);
} }
class CardHolderComponent {
    toCdn(file) {
        return cdnUrl[file] || file;
    }
}
CardHolderComponent.ɵfac = function CardHolderComponent_Factory(t) { return new (t || CardHolderComponent)(); };
CardHolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardHolderComponent, selectors: [["card-holder"]], inputs: { player: "player", calculator: "calculator" }, decls: 7, vars: 10, consts: [["class", "remove-player-btn left", 4, "ngIf"], ["class", "equity", 3, "id", 4, "ngIf"], [3, "card", "calculator", 4, "ngFor", "ngForOf"], [1, "remove-player-btn", "left"], [3, "src", "click", 4, "ngIf"], [3, "src", "click"], [1, "equity", 3, "id"], [3, "card", "calculator"]], template: function CardHolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardHolderComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardHolderComponent_div_5_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardHolderComponent_card_6_Template, 1, 2, "card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.player.label().id, "-cards card-holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.player.index != -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.player.class());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.player.label().name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.player.equity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: [".left[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.hero-cards[_ngcontent-%COMP%] {\r\n    margin: 20px 0px 0px 150px;\r\n}\r\n\r\n.villain1-cards[_ngcontent-%COMP%] {\r\n    margin: 20px 0px 0px 350px;\r\n}\r\n\r\n.villain2-cards[_ngcontent-%COMP%] {\r\n    margin: 20px 0px 0px 550px;\r\n}\r\n\r\n.villain3-cards[_ngcontent-%COMP%] {\r\n    margin: 285px 0px 0px 150px;\r\n}\r\n\r\n.villain4-cards[_ngcontent-%COMP%] {\r\n    margin: 285px 0px 0px 520px;\r\n}\r\n\r\n.villain5-cards[_ngcontent-%COMP%] {\r\n    margin: 285px 0px 0px 600px;\r\n}\r\n\r\n.card-holder[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n}\r\n\r\n.board-cards[_ngcontent-%COMP%] {\r\n    margin: 70px 0px 0px 255px;\r\n    position: absolute;\r\n}\r\n\r\n.equity[_ngcontent-%COMP%] {\r\n    -webkit-text-stroke: 0px black;\r\n    color: bisque;\r\n    text-align: center;\r\n}\r\n\r\n.remove-player-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.remove-player-btn[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    margin: 5px 10px 0px 0px;\r\n    opacity: 0.7;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n    .category-label[_ngcontent-%COMP%] {\r\n        float: left;\r\n        width: 65px;\r\n    }\r\n\r\n    .board-label[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .card-holder[_ngcontent-%COMP%], #board-cards[_ngcontent-%COMP%] {\r\n        margin: 0 0 0 10px;\r\n    }\r\n\r\n    .equity[_ngcontent-%COMP%] {\r\n        float: right;\r\n        font-size: 12px;\r\n        margin-right: 10px;\r\n        margin-top: 28px;\r\n    }\r\n\r\n    .card-holder[_ngcontent-%COMP%], #board-cards[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        height: 145px;\r\n        font-size: 25px;\r\n        font-weight: bolder;\r\n        -webkit-text-stroke-width: 1px;\r\n        -webkit-text-stroke-color: black;\r\n    }\r\n\r\n    .card-holder.deck-card-wrapper[_ngcontent-%COMP%] {\r\n        padding: 4px !important;\r\n    }\r\n    .remove-player-btn[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtaG9sZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImNhcmQtaG9sZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmhlcm8tY2FyZHMge1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMTUwcHg7XHJcbn1cclxuXHJcbi52aWxsYWluMS1jYXJkcyB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4IDBweCAzNTBweDtcclxufVxyXG5cclxuLnZpbGxhaW4yLWNhcmRzIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDU1MHB4O1xyXG59XHJcblxyXG4udmlsbGFpbjMtY2FyZHMge1xyXG4gICAgbWFyZ2luOiAyODVweCAwcHggMHB4IDE1MHB4O1xyXG59XHJcblxyXG4udmlsbGFpbjQtY2FyZHMge1xyXG4gICAgbWFyZ2luOiAyODVweCAwcHggMHB4IDUyMHB4O1xyXG59XHJcbi52aWxsYWluNS1jYXJkcyB7XHJcbiAgICBtYXJnaW46IDI4NXB4IDBweCAwcHggNjAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhvbGRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkcyB7XHJcbiAgICBtYXJnaW46IDcwcHggMHB4IDBweCAyNTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmVxdWl0eSB7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwcHggYmxhY2s7XHJcbiAgICBjb2xvcjogYmlzcXVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVtb3ZlLXBsYXllci1idG4gaW1nIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4ucmVtb3ZlLXBsYXllci1idG4ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDBweCAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAuY2F0ZWdvcnktbGFiZWwge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib2FyZC1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ob2xkZXIsICNib2FyZC1jYXJkcyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcXVpdHkge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaG9sZGVyLCAjYm9hcmQtY2FyZHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ob2xkZXIuZGVjay1jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJlbW92ZS1wbGF5ZXItYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardHolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'card-holder',
                templateUrl: './card-holder.component.html',
                styleUrls: ['./card-holder.component.css']
            }]
    }], null, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calculator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vvJJ":
/*!********************************************!*\
  !*** ./src/app/calculator/card.service.ts ***!
  \********************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


function toCdn(file) {
    return cdnUrl[file] || file;
}
class Card {
    constructor(imageId, src = '', value = null) {
        this.imageId = imageId;
        this.src = src;
        this.value = value;
        this.redBack = toCdn('assets/images/cards_zipped/red_back.png');
        this.redBackBordered = toCdn('assets/images/cards_zipped/red_back_bordered.jpg');
        this.imageId = imageId;
        this.setNewCard(src, value);
    }
    setNewCard(src, value) {
        this.src = toCdn(src || this.redBack);
        this.value = value;
    }
    serverValue() {
        if (!this.value) {
            return null;
        }
        return this.value.slice(-1) + this.value.slice(0, -1);
    }
    deselect() {
        this.src = toCdn(this.redBack);
        this.value = null;
    }
    setSrc(calculator) {
        if (!this.value) {
            if (this === calculator.nextCard()) {
                this.src = toCdn(this.redBackBordered);
            }
            else {
                this.src = toCdn(this.redBack);
            }
        }
    }
}
Card.ɵfac = function Card_Factory(t) { return new (t || Card)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('imageId'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('src'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('value')); };
Card.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Card, factory: Card.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Card, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['imageId']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['src']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['value']
            }] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


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
//# sourceMappingURL=main-es2015.js.map