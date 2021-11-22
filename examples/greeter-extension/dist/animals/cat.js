"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const types_1 = require("../types");
/**
 * An Animal implementation for Cat
 */
let Cat = class Cat {
    constructor(options = { xre: false }) {
        this.options = options;
        this.gen = 'cat';
    }
    speak(text) {
        var _a;
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.xre) === true) {
            return `Cat ${text} xre xre`;
        }
        else {
            return `Cat ${text} meow meow`;
        }
    }
};
Cat = (0, tslib_1.__decorate)([
    (0, core_1.injectable)(types_1.asAnimal),
    (0, tslib_1.__param)(0, (0, core_1.config)()),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Cat);
exports.Cat = Cat;
//# sourceMappingURL=cat.js.map