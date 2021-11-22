"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalComponent = exports.GreetingComponent = void 0;
const core_1 = require("@loopback/core");
const greeter_cn_1 = require("./greeters/greeter-cn");
const greeter_en_1 = require("./greeters/greeter-en");
const greeting_service_1 = require("./greeting-service");
const keys_1 = require("./keys");
const dog_1 = require("./animals/dog");
const cat_1 = require("./animals/cat");
const animal_service_1 = require("./animal-service");
const keys_2 = require("./keys");
/**
 * Define a component to register the greeter extension point and built-in
 * extensions
 */
class GreetingComponent {
    constructor() {
        this.bindings = [
            (0, core_1.createBindingFromClass)(greeting_service_1.GreetingService, {
                key: keys_1.GREETING_SERVICE,
            }),
            (0, core_1.createBindingFromClass)(greeter_en_1.EnglishGreeter),
            (0, core_1.createBindingFromClass)(greeter_cn_1.ChineseGreeter),
        ];
    }
    async init() { }
}
exports.GreetingComponent = GreetingComponent;
/**
 * Define a component to register the animal extension point and built-in extensions
 */
class AnimalComponent {
    constructor() {
        this.bindings = [
            (0, core_1.createBindingFromClass)(animal_service_1.AnimalService, {
                key: keys_2.ANIMAL_SERVICE,
            }),
            (0, core_1.createBindingFromClass)(dog_1.Dog),
            (0, core_1.createBindingFromClass)(cat_1.Cat),
        ];
    }
    async init() { }
}
exports.AnimalComponent = AnimalComponent;
//# sourceMappingURL=component.js.map