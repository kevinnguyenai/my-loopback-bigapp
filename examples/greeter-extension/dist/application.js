"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingApplication = void 0;
const core_1 = require("@loopback/core");
const component_1 = require("./component");
const keys_1 = require("./keys");
const component_2 = require("./component");
const keys_2 = require("./keys");
class GreetingApplication extends core_1.Application {
    constructor() {
        super();
        this.component(component_1.GreetingComponent);
        this.component(component_2.AnimalComponent);
    }
    async main() {
        // Greet Extensions
        const greetingService = await this.getGreetingService();
        let msg = await greetingService.greet('en', 'Raymond');
        console.log('English:', msg);
        msg = await greetingService.greet('zh', 'Raymond');
        console.log('Chinese:', msg);
        // Animal Extensions
        const animalService = await this.getAnimalService();
        msg = await animalService.speak('dog', 'Speen');
        console.log(msg);
        msg = await animalService.speak('cat', 'Boro');
        console.log(msg);
    }
    async getGreetingService() {
        return this.get(keys_1.GREETING_SERVICE);
    }
    async getAnimalService() {
        return this.get(keys_2.ANIMAL_SERVICE);
    }
}
exports.GreetingApplication = GreetingApplication;
//# sourceMappingURL=application.js.map