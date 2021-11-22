"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANIMAL_SERVICE = exports.GREETING_SERVICE = void 0;
const core_1 = require("@loopback/core");
/**
 * Strongly-typed binding key for GreetingService
 */
exports.GREETING_SERVICE = core_1.BindingKey.create('services.GreetingService');
/**
 * Strongly-typed binding key for AnimalService
 */
exports.ANIMAL_SERVICE = core_1.BindingKey.create('services.AnimalService');
//# sourceMappingURL=keys.js.map