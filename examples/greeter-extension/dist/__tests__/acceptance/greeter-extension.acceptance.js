"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const testlab_1 = require("@loopback/testlab");
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
const __1 = require("../..");
describe('greeter-extension-pont', () => {
    let app;
    let greetingService;
    beforeEach(givenAppWithGreeterComponent);
    beforeEach(findGreetingService);
    it('greets by language', async () => {
        let msg = await greetingService.greet('en', 'Raymond');
        (0, testlab_1.expect)(msg).to.eql('Hello, Raymond!');
        msg = await greetingService.greet('zh', 'Raymond');
        (0, testlab_1.expect)(msg).to.eql('Raymond，你好！');
    });
    it('supports options for the extension point', async () => {
        // Configure the extension point
        app.configure(__1.GREETING_SERVICE).to({ color: 'blue' });
        greetingService = await app.get(__1.GREETING_SERVICE);
        (0, testlab_1.expect)(greetingService.options).to.eql({ color: 'blue' });
        const msg = await greetingService.greet('en', 'Raymond');
        (0, testlab_1.expect)(msg).to.eql(chalk_1.default.keyword('blue')('Hello, Raymond!'));
    });
    it('supports options for extensions', async () => {
        // Configure the ChineseGreeter
        app.configure('greeters.ChineseGreeter').to({ nameFirst: false });
        const msg = await greetingService.greet('zh', 'Raymond');
        (0, testlab_1.expect)(msg).to.eql('你好，Raymond！');
    });
    it('honors a newly added/removed greeter binding', async () => {
        /**
         * A greeter implementation for French
         */
        let FrenchGreeter = class FrenchGreeter {
            constructor() {
                this.language = 'fr';
            }
            greet(name) {
                return `Bonjour, ${name}!`;
            }
        };
        FrenchGreeter = (0, tslib_1.__decorate)([
            (0, core_1.injectable)(__1.asGreeter)
        ], FrenchGreeter);
        // Add a new greeter for French
        const binding = (0, core_1.createBindingFromClass)(FrenchGreeter);
        app.add(binding);
        let msg = await greetingService.greet('fr', 'Raymond');
        (0, testlab_1.expect)(msg).to.eql('Bonjour, Raymond!');
        // Remove the French greeter
        app.unbind(binding.key);
        msg = await greetingService.greet('fr', 'Raymond');
        // It falls back to English
        (0, testlab_1.expect)(msg).to.eql('Hello, Raymond!');
    });
    function givenAppWithGreeterComponent() {
        app = new __1.GreetingApplication();
    }
    async function findGreetingService() {
        greetingService = await app.getGreetingService();
    }
});
//# sourceMappingURL=greeter-extension.acceptance.js.map