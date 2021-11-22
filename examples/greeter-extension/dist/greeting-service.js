"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
const types_1 = require("./types");
/**
 * An extension point for greeters that can greet in different languages
 */
let GreetingService = class GreetingService {
    constructor(
    /**
     * Inject a getter function to fetch greeters (bindings tagged with
     * `{[CoreTags.EXTENSION_POINT]: GREETER_EXTENSION_POINT_NAME}`)
     */
    getGreeters, 
    /**
     * An extension point should be able to receive its options via dependency
     * injection.
     */
    options) {
        this.getGreeters = getGreeters;
        this.options = options;
    }
    /**
     * Find a greeter that can speak the given language
     * @param language - Language code for the greeting
     */
    async findGreeter(language) {
        // Get the latest list of greeters
        const greeters = await this.getGreeters();
        // Find a greeter that can speak the given language
        return greeters.find(g => g.language === language);
    }
    /**
     * Greet in the given language
     * @param language - Language code
     * @param name - Name
     */
    async greet(language, name) {
        var _a;
        let greeting = '';
        const greeter = await this.findGreeter(language);
        if (greeter) {
            greeting = greeter.greet(name);
        }
        else {
            // Fall back to English
            greeting = `Hello, ${name}!`;
        }
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.color) {
            greeting = chalk_1.default.keyword(this.options.color)(greeting);
        }
        return greeting;
    }
};
GreetingService = (0, tslib_1.__decorate)([
    (0, core_1.extensionPoint)(types_1.GREETER_EXTENSION_POINT_NAME),
    (0, tslib_1.__param)(0, (0, core_1.extensions)()),
    (0, tslib_1.__param)(1, (0, core_1.config)()),
    (0, tslib_1.__metadata)("design:paramtypes", [Function, Object])
], GreetingService);
exports.GreetingService = GreetingService;
//# sourceMappingURL=greeting-service.js.map