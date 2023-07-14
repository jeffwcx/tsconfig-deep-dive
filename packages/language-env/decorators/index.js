"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// function log(
//   target: any,
//   context: ClassMethodDecoratorContext
// ) {
//   const methodName = String(context.name);
//   return function (this: any, ...args: any[]) {
//     console.log('logged', methodName);
//     return target.apply(this, args);
//   };
// }
function log(target, propertyName, description) {
    var method = description.value;
    if (!method)
        return;
    description.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('logged', target, propertyName);
        return method.apply(this, args);
    };
}
function param(_, propertyKey, parameterIndex) {
    console.log('it is', propertyKey);
    console.log(arguments);
}
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.beGreat = function () { };
    A.prototype.hello = function (who) {
        return who;
    };
    __decorate([
        log,
        __param(0, param),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], A.prototype, "hello", null);
    A = __decorate([
        sealed
    ], A);
    return A;
}());
