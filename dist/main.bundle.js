webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__move__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriggerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TriggerComponent = (function () {
    function TriggerComponent() {
        this.state = 'inactive';
    }
    TriggerComponent.prototype.mouseover = function () {
        if (this.state === 'inactive') {
            this.state = 'hover';
        }
    };
    TriggerComponent.prototype.mouseleave = function () {
        if (this.state === 'hover') {
            this.state = 'inactive';
        }
    };
    TriggerComponent.prototype.edit = function () {
        if (this.state === 'hover') {
            this.state = 'edit';
        }
    };
    TriggerComponent.prototype.save = function () {
        if (this.state === 'edit') {
            this.state = 'inactive';
        }
    };
    return TriggerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__move__["a" /* Trigger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__move__["a" /* Trigger */]) === "function" && _a || Object)
], TriggerComponent.prototype, "data", void 0);
TriggerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ap-move-trigger',
        template: __webpack_require__(169),
        styles: [__webpack_require__(160)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* Animations */].Dim,
            __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* Animations */].FadeIn,
        ]
    })
], TriggerComponent);

var _a;
//# sourceMappingURL=trigger.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ":host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    margin: 15px;\n    width: 20%;\n}\n\n:host p {\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".details {\n    margin-top: 20px;\n}\n\n.success {\n    background: #DFF0D8;\n}\n.partial {\n    background: #FCF8E3;\n}\n.failure {\n    background: #F2DEDE;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".edit {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<ap-move *ngFor='let move of moves' [move]='move'></ap-move>\n<!--\n<div class=\"move\">\n  <md-card>\n    <md-card-title>When you do something under fire, or dig in to endure fire</md-card-title>\n    <md-card-subtitle>Trigger</md-card-subtitle>\n  </md-card>\n  <md-card class=\"randomizer\">\n    <md-card-title>roll+cool</md-card-title>\n    <md-card-subtitle>Randomizer</md-card-subtitle>\n    <md-card-content>\n      <md-card class=\"success\">On a 10+, you do it</md-card>\n      <md-card class=\"partial\">On a 7–9, you flinch, hesitate, or stall: the MC can offer you a worse outcome, a hard bargain, or an ugly choice</md-card>\n      <md-card class=\"failure\">On a miss, be prepared for the worst</md-card>\n    </md-card-content>\n  </md-card>\n</div>\n\n<div class=\"move\">\n  <md-card>\n    <md-card-title>When you go aggro on someone</md-card-title>\n    <md-card-subtitle>Trigger</md-card-subtitle>\n  </md-card>\n  <md-card class=\"randomizer\">\n    <md-card-title>roll+hard</md-card-title>\n    <md-card-subtitle>Randomizer</md-card-subtitle>\n    <md-card-content>\n      <md-card class=\"success\">\n        On a 10+, they have to choose:\n        <ul>\n          <li>Force your hand and suck it up</li>\n          <li>Cave and do what you want</li>\n        </ul>\n      </md-card>\n      <md-card class=\"partial\">\n        On a 7–9, they have to choose:\n        <ul>\n          <li>Force your hand and suck it up</li>\n          <li>Cave and do what you want</li>\n          <li>Get the hell out of your way</li>\n          <li>Barricade themselves securely in</li>\n          <li>Give you something they think you want, or tell you what you want to hear</li>\n          <li>Back off calmly, hands where you can see</li>\n        </ul>\n      </md-card>\n      <md-card class=\"failure\">On a miss, be prepared for the worst</md-card>\n    </md-card-content>\n  </md-card>\n</div>\n\n<div class=\"move\">\n  <md-card>\n    <md-card-title>When you attack someone unsuspecting or helpless</md-card-title>\n    <md-card-subtitle>Trigger</md-card-subtitle>\n  </md-card>\n  <md-card class=\"branch\">\n    <md-card-title>Ask the MC if you could miss</md-card-title>\n    <md-card-subtitle>Branch</md-card-subtitle>\n    <md-card-content>\n      <md-card>\n        If you could, treat it as going aggro, but your victim has no choice to cave and\ndo what you want\n      </md-card>\n      <md-card>\n        If you couldn’t, you simply inflict harm as established\n      </md-card>\n    </md-card-content>\n\n  </md-card>\n</div>\n\n<div class=\"move\">\n  <md-card>\n    <md-card-title>When you try to seduce, manipulate, bluff, fast-talk, or lie to an NPC</md-card-title>\n    <md-card-subtitle>Trigger</md-card-subtitle>\n  </md-card>\n  <md-card>\n    <md-card-subtitle>Action</md-card-subtitle>\n    <md-card-content>Give them a reason</md-card-content>\n  </md-card>\n  <md-card class=\"randomizer\">\n    <md-card-title>roll+hot</md-card-title>\n    <md-card-subtitle>Randomizer</md-card-subtitle>\n    <md-card-content>\n      <md-card class=\"success\">\n        On a 10+, they’ll go along with you, unless or until some fact or action betrays the reason\nyou gave them\n      </md-card>\n      <md-card class=\"partial\">\n        On a 7-9, they’ll go along with you, but they need some concrete\nassurance, corroboration, or evidence first\n      </md-card>\n      <md-card class=\"failure\">On a miss, be prepared for the worst</md-card>\n    </md-card-content>\n  </md-card>\n</div>\n\n<div class=\"move\">\n  <md-card>\n    <md-card-title>When you try to seduce, manipulate, bluff, fast-talk, or lie to a PC</md-card-title>\n    <md-card-subtitle>Trigger</md-card-subtitle>\n  </md-card>\n  <md-card>\n    <md-card-subtitle>Action</md-card-subtitle>\n    <md-card-content>Give them a reason</md-card-content>\n  </md-card>\n  <md-card class=\"randomizer\">\n    <md-card-title>roll+hot</md-card-title>\n    <md-card-subtitle>Randomizer</md-card-subtitle>\n    <md-card-content>\n      <md-card class=\"success\">\n        On a 10+, both:\n        <ul>\n          <li>If they go along with you, they mark experience</li>\n          <li>If they refuse, erase one of their stat highlights for the remainder of the session\n        </ul>\n        What they do then is up to them.\n      </md-card>\n      <md-card class=\"partial\">\n        On a 7-9, choose 1:\n        <ul>\n          <li>If they go along with you, they mark experience</li>\n          <li>If they refuse, erase one of their stat highlights for the remainder of the session\n        </ul>\n        What they do then is up to them.\n      </md-card>\n      <md-card class=\"failure\">On a miss, be prepared for the worst</md-card>\n    </md-card-content>\n  </md-card>\n</div>\n\n<div class=\"move\">\n  <md-card>\n    <md-card-title>When you read a charged situation</md-card-title>\n    <md-card-subtitle>Trigger</md-card-subtitle>\n  </md-card>\n  <md-card class=\"randomizer\">\n    <md-card-title>roll+sharp</md-card-title>\n    <md-card-subtitle>Randomizer</md-card-subtitle>\n    <md-card-content>\n      <md-card class=\"success\">\n        On a 10+, ask 3\n      </md-card>\n      <md-card class=\"partial\">\n        On a 7-9, ask 1\n      </md-card>\n      <md-card class=\"failure\">On a miss, ask 1 anyway, but be prepared for the worst.</md-card>\n    </md-card-content>\n  </md-card>\n  <md-card class=\"action\">\n    <md-card-subtitle>Action</md-card-subtitle>\n    <md-card-content>Ask questions:\n    <ul>\n      <li>Where’s my best escape route / way in / way past?</li>\n      <li>Which enemy is most vulnerable to me?</li>\n      <li>Which enemy is the biggest threat?</li>\n      <li>What should I be on the lookout for?</li>\n      <li>What’s my enemy’s true position?</li>\n      <li>Who’s in control here?</li>\n    </ul></md-card-content>\n  </md-card>\n  <md-card class=\"action\">\n    <md-card-subtitle>Action</md-card-subtitle>\n    <md-card-content>Whenever you act on one of the MC’s answers, take +1</md-card-content>\n  </md-card>\n</div>-->"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<md-card (mouseover)=\"mouseover()\" \n         (mouseleave)=\"mouseleave()\">\n  <md-card-subtitle>Action</md-card-subtitle>\n  <md-card-content [@dim]=\"state\" [innerHTML]=\"data.text|MarkdownToHtml\"></md-card-content>\n  <md-input-container *ngIf=\"state=='edit'\" class=\"edit\">\n    <textarea mdInput [(ngModel)]=\"data.text\"></textarea>\n  </md-input-container>\n  <md-card-actions>\n    <button md-raised-button \n            [@fadeIn]=\"in\"\n            *ngIf=\"state=='hover'\"\n            (click)=\"edit()\">Edit</button>\n    <button md-raised-button \n            [@fadeIn]=\"in\"\n            color=\"primary\"\n            *ngIf=\"state=='edit'\"\n            (click)=\"save()\">Save</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-subtitle>Branch</md-card-subtitle>\n  <md-card-content>{{ data.text }}</md-card-content>\n  <md-card *ngFor=\"let branch of data.branches\" [innerHTML]=\"branch|MarkdownToHtml\"></md-card>\n</md-card>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<h2>{{move.name}}</h2>\n<ng-container *ngFor=\"let step of move.steps\" [ngSwitch]=\"step.type\">\n  <ap-move-action       *ngSwitchCase=\"'action'\"      [data]=\"step\"></ap-move-action>\n  <ap-move-branch       *ngSwitchCase=\"'branch'\"      [data]=\"step\"></ap-move-branch>\n  <ap-move-randomizer   *ngSwitchCase=\"'randomizer'\"  [data]=\"step\"></ap-move-randomizer>\n  <ap-move-trigger      *ngSwitchCase=\"'trigger'\"     [data]=\"step\"></ap-move-trigger>\n</ng-container>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-subtitle>Randomizer</md-card-subtitle>\n  <md-card-content>{{ data.text }}</md-card-content>\n  <md-card *ngFor=\"let result of data.results\" \n           [class]=\"result.name\"\n           [innerHTML]=\"result.text|MarkdownToHtml\"></md-card>\n  <md-card-content class=\"details\"\n                   [innerHTML]=\"data.details|MarkdownToHtml\"></md-card-content>\n</md-card>\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<md-card (mouseover)=\"mouseover()\" \n         (mouseleave)=\"mouseleave()\">\n  <md-card-subtitle>Trigger</md-card-subtitle>\n  <md-card-content [@dim]=\"state\" [innerHTML]=\"data.text|MarkdownToHtml\"></md-card-content>\n  <md-input-container *ngIf=\"state=='edit'\" class=\"edit\">\n    <textarea mdInput [(ngModel)]=\"data.text\"></textarea>\n  </md-input-container>\n  <md-card-actions>\n    <button md-raised-button \n            [@fadeIn]=\"in\"\n            *ngIf=\"state=='hover'\"\n            (click)=\"edit()\">Edit</button>\n    <button md-raised-button \n            [@fadeIn]=\"in\"\n            color=\"primary\"\n            *ngIf=\"state=='edit'\"\n            (click)=\"save()\">Save</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Randomizer; });
/* unused harmony export RandomizerResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trigger; });
var Move = (function () {
    function Move() {
    }
    return Move;
}());

var Action = (function () {
    function Action() {
    }
    return Action;
}());

var Branch = (function () {
    function Branch() {
    }
    return Branch;
}());

var Randomizer = (function () {
    function Randomizer() {
    }
    return Randomizer;
}());

var RandomizerResult = (function () {
    function RandomizerResult() {
    }
    return RandomizerResult;
}());

var Trigger = (function () {
    function Trigger() {
    }
    return Trigger;
}());

//# sourceMappingURL=move.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdInputModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdInputModule */]],
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });

var Animations = (function () {
    function Animations() {
    }
    return Animations;
}());

Animations.Dim = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('dim', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        opacity: '1'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('hover', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        opacity: '1'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('edit', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        opacity: '0.5'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('inactive <=> hover', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('hover <=> edit', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-out')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('edit <=> inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-out')),
]);
Animations.FadeIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        opacity: 1
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0,
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in')
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.moves = [
            {
                name: 'Do something under fire',
                steps: [
                    {
                        type: 'trigger',
                        text: 'When you do something under fire, or dig in to endure fire'
                    },
                    {
                        type: 'randomizer',
                        text: 'Roll +Cool',
                        results: [
                            {
                                name: 'success',
                                text: 'On a 10+, you do it'
                            },
                            {
                                name: 'partial',
                                text: 'On a 7–9, you flinch, hesitate, or stall: the MC can offer you a worse outcome, a hard bargain, or an ugly choice'
                            },
                            {
                                name: 'failure',
                                text: 'On a miss, be prepared for the worst.'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Go aggro on someone',
                steps: [
                    {
                        type: 'trigger',
                        text: 'When you go aggro on someone'
                    },
                    {
                        type: 'randomizer',
                        text: 'Roll +Hard',
                        results: [
                            {
                                name: 'success',
                                text: 'On a 10+, they have to choose: \n- Force your hand and suck it up\n- Cave and do what you want'
                            },
                            {
                                name: 'partial',
                                text: 'On a 7–9, they have to choose: \n- Force your hand and suck it up \n- Cave and do what you want \n- Get the hell out of your way \n- Barricade themselves securely in \n- Give you something they think you want, or tell you what you want to hear \n- Back off calmly, hands where you can see'
                            },
                            {
                                name: 'failure',
                                text: 'On a miss, be prepared for the worst.'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Sucker someone',
                steps: [
                    {
                        type: 'trigger',
                        text: 'When you attack someone unsuspecting or helpless'
                    },
                    {
                        type: 'branch',
                        text: 'ask the MC if you could miss',
                        branches: [
                            'If you could, treat it as going aggro, but your victim has no choice to cave and do what you want',
                            'If you couldn’t, you simply inflict harm as established'
                        ]
                    }
                ]
            },
            {
                name: 'Seduce or manipulate an NPC',
                steps: [
                    {
                        type: 'trigger',
                        text: 'When you try to seduce, manipulate, bluff, fast-talk, or lie to an NPC'
                    },
                    {
                        type: 'action',
                        text: 'Give them a reason'
                    },
                    {
                        type: 'randomizer',
                        text: 'Roll +Hard',
                        results: [
                            {
                                name: 'success',
                                text: 'On a 10+, they’ll go along with you, unless or until some fact or action betrays the reason'
                            },
                            {
                                name: 'partial',
                                text: 'On a 7-9, they’ll go along with you, but they need some concrete assurance, corroboration, or evidence first'
                            },
                            {
                                name: 'failure',
                                text: 'On a miss, be prepared for the worst.'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Read a sitch',
                steps: [
                    {
                        type: 'trigger',
                        text: 'When you read a charged situation'
                    },
                    {
                        type: 'randomizer',
                        text: 'Roll +Hard',
                        results: [
                            {
                                name: 'success',
                                text: 'On a 10+, ask 3'
                            },
                            {
                                name: 'partial',
                                text: 'On a 7-9, ask 1'
                            },
                            {
                                name: 'failure',
                                text: 'On a miss, ask 1 anyway, but be prepared for the worst.'
                            }
                        ],
                        details: 'Questions: \n- Where’s my best escape route / way in / way past?\n- Which enemy is most vulnerable to me?\n- Which enemy is the biggest threat?\n- What should I be on the lookout for?\n- What’s my enemy’s true position?\n- Who’s in control here?'
                    },
                    {
                        type: 'action',
                        text: 'Whenever you act on one of the MC’s answers, take +1'
                    },
                ]
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(164),
        styles: [__webpack_require__(155)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_material_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__move_move_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__move_move_module__["a" /* MoveModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__move__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionComponent = (function () {
    function ActionComponent() {
        this.state = 'inactive';
    }
    ActionComponent.prototype.mouseover = function () {
        if (this.state === 'inactive') {
            this.state = 'hover';
        }
    };
    ActionComponent.prototype.mouseleave = function () {
        if (this.state === 'hover') {
            this.state = 'inactive';
        }
    };
    ActionComponent.prototype.edit = function () {
        if (this.state === 'hover') {
            this.state = 'edit';
        }
    };
    ActionComponent.prototype.save = function () {
        if (this.state === 'edit') {
            this.state = 'inactive';
        }
    };
    return ActionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__move__["d" /* Action */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__move__["d" /* Action */]) === "function" && _a || Object)
], ActionComponent.prototype, "data", void 0);
ActionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ap-move-action',
        template: __webpack_require__(165),
        styles: [__webpack_require__(156)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* Animations */].Dim,
            __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* Animations */].FadeIn,
        ]
    })
], ActionComponent);

var _a;
//# sourceMappingURL=action.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__move__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BranchComponent = (function () {
    function BranchComponent() {
    }
    return BranchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__move__["c" /* Branch */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__move__["c" /* Branch */]) === "function" && _a || Object)
], BranchComponent.prototype, "data", void 0);
BranchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ap-move-branch',
        template: __webpack_require__(166),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], BranchComponent);

var _a;
//# sourceMappingURL=branch.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__move__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoveComponent = (function () {
    function MoveComponent() {
    }
    return MoveComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__move__["e" /* Move */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__move__["e" /* Move */]) === "function" && _a || Object)
], MoveComponent.prototype, "move", void 0);
MoveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ap-move',
        template: __webpack_require__(167),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [])
], MoveComponent);

var _a;
//# sourceMappingURL=move.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_material_module__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_markdown_to_html_pipe__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_markdown_to_html_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_markdown_to_html_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__move_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__action_action_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__branch_branch_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__randomizer_randomizer_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__trigger_trigger_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MoveModule = (function () {
    function MoveModule() {
    }
    return MoveModule;
}());
MoveModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6_markdown_to_html_pipe__["MarkdownToHtmlModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__move_component__["a" /* MoveComponent */],
            __WEBPACK_IMPORTED_MODULE_8__action_action_component__["a" /* ActionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__branch_branch_component__["a" /* BranchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__randomizer_randomizer_component__["a" /* RandomizerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__trigger_trigger_component__["a" /* TriggerComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__move_component__["a" /* MoveComponent */],
        ]
    })
], MoveModule);

//# sourceMappingURL=move.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__move__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomizerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RandomizerComponent = (function () {
    function RandomizerComponent() {
    }
    return RandomizerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__move__["b" /* Randomizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__move__["b" /* Randomizer */]) === "function" && _a || Object)
], RandomizerComponent.prototype, "data", void 0);
RandomizerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ap-move-randomizer',
        template: __webpack_require__(168),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [])
], RandomizerComponent);

var _a;
//# sourceMappingURL=randomizer.component.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map