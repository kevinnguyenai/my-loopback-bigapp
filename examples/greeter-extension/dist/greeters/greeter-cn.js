"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChineseGreeter = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const types_1 = require("../types");
/**
 * A greeter implementation for Chinese.
 */
let ChineseGreeter = class ChineseGreeter {
    constructor(
    /**
     * Inject the configuration for ChineseGreeter
     */
    options = { nameFirst: true }) {
        this.options = options;
        this.language = 'zh';
    }
    greet(name) {
        var _a;
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.nameFirst) === false) {
            return `你好，${name}！`;
        }
        return `${name}，你好！`;
    }
};
ChineseGreeter = (0, tslib_1.__decorate)([
    (0, core_1.injectable)(types_1.asGreeter),
    (0, tslib_1.__param)(0, (0, core_1.config)()),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ChineseGreeter);
exports.ChineseGreeter = ChineseGreeter;
//# sourceMappingURL=greeter-cn.js.map