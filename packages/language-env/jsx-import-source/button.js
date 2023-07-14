(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "preact/jsx-runtime"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jsx_runtime_1 = require("preact/jsx-runtime");
    var Button = function () {
        return ((0, jsx_runtime_1.jsx)("button", {}));
    };
    exports.default = Button;
});
