"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnglishGreeter = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
const types_1 = require("../types");
/**
 * A greeter implementation for English
 */
let EnglishGreeter = class EnglishGreeter {
    constructor() {
        this.language = 'en';
    }
    greet(name) {
        return `Hello, ${name}!`;
    }
};
EnglishGreeter = (0, tslib_1.__decorate)([
    (0, core_1.injectable)(types_1.asGreeter)
], EnglishGreeter);
exports.EnglishGreeter = EnglishGreeter;
//# sourceMappingURL=greeter-en.js.map