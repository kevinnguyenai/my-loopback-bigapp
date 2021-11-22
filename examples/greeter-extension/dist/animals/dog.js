"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const types_1 = require("../types");
/**
 * A Animal implementation for Dog
 */
let Dog = class Dog {
    constructor(options = { gru: false }) {
        this.options = options;
        this.gen = 'dog';
    }
    speak(text) {
        var _a;
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.gru) === true) {
            return `Dog speak: ${text} gru gru !`;
        }
        else {
            return `Dog speak: ${text} wow wow !`;
        }
    }
};
Dog = (0, tslib_1.__decorate)([
    (0, core_1.injectable)(types_1.asAnimal),
    (0, tslib_1.__param)(0, (0, core_1.config)()),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Dog);
exports.Dog = Dog;
//# sourceMappingURL=dog.js.map